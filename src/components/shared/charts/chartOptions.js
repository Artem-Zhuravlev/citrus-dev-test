export default {
  responsive: true,
  elements: {
    line: {
      borderColor: '#e5e5e5',
      backgroundColor: 'transparent',
    },
    point: {
      backgroundColor: 'transparent',
    },
  },
  scales: {
    x: {
      grid: {
        color: '#e5e5e5',
        drawBorder: true,
        borderDash: [2, 2],
      }
    },
    y: {
      grid: {
        color: '#e5e5e5',
        drawBorder: true,
        borderDash: [2, 2],
      }
    }
  }
};
