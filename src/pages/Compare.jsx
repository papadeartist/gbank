function Compare() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>So sánh trái phiếu</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Tiêu chí</th>
            <th>Trái phiếu xanh</th>
            <th>Truyền thống</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mục tiêu</td>
            <td>Tài trợ dự án xanh</td>
            <td>Không phân biệt dự án</td>
          </tr>
          <tr>
            <td>Báo cáo tác động</td>
            <td>Có yêu cầu</td>
            <td>Không yêu cầu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Compare;