import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableCell = styled.td`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  text-align: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 12px;
    padding: 8px 4px;
  }
`;

export const TableHeader = styled.th`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.windsor};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 12px;
    padding: 8px 4px;
    font-weight: normal;
  }
`;

export const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};

  &:hover{
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;