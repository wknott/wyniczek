import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ResultModal from "./ResultModal";
import {
  formatDateStringShort,
  formatDateString,
  calculateWinners,
} from "../../../../logic/utilities.js";
import { getResults } from "../../../../proxy/api";
import { theme } from "../../../../theme";
import { Table, TableContainer, TableHeader, TableRow, TableCell } from "../../../../common/Table";
import { useQueryParameter } from "../../../../queryParameters";
import Pager from "../../../../common/Pager";

const ResultsTable = ({ selectedGame }) => {
  const [results, setResults] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const handleShowResultModal = (result) => {
    setSelectedResult(result);
    setShowResultModal(true);
  };
  const page = useQueryParameter("page") || 1;

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);
      const { results, numberOfResults } = await getResults(page, selectedGame);
      setLoading(false);
      setResults(results);
      setNumberOfResults(numberOfResults);
    };

    loadResults();
  }, [selectedGame, page]);

  return (
    <TableContainer>

      {
        loading ?
          <ReactLoading color={theme.colors.windsor} /> :
          <>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Gra</TableHeader>
                  <TableHeader>1. Gracz</TableHeader>
                  <TableHeader>Data</TableHeader>
                  <TableHeader>Zwycięzca</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <TableRow key={index} onClick={() => handleShowResultModal(result)}>
                    <TableCell>{result.game.name}</TableCell>
                    <TableCell>
                      {result.scores.find((score, index) => index === 0).user.name}
                    </TableCell>
                    <TableCell>{window.innerWidth > 800 ? formatDateString(result.date) : formatDateStringShort(result.date)}</TableCell>
                    <TableCell>{calculateWinners(result).join(" ")}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            {numberOfResults > 10 && <Pager numberOfResults={numberOfResults} />}
          </>
      }
      <ResultModal
        show={showResultModal}
        handleClose={() => setShowResultModal(false)}
        result={selectedResult}
      />
    </TableContainer >
  );
}

export default ResultsTable;
