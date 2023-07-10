import { HistoryContainer, HistoryList } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Completa</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Completa</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Completa</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Completa</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Completa</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Completa</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
