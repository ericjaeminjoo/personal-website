const deviceScreenBreakPoints = {
  viewport4: '480px',
  viewport7: '768px',
  viewport9: '992px',
  viewport12: '1200px',
};

export const viewport = {
  viewport4: `(min-width: ${deviceScreenBreakPoints.viewport4})`,
  viewport7: `(min-width: ${deviceScreenBreakPoints.viewport7})`,
  viewport9: `(min-width: ${deviceScreenBreakPoints.viewport9})`,
  viewport12: `(min-width: ${deviceScreenBreakPoints.viewport12})`,
};
