// const reportWebVitals = onPerfEntry => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => {
        console.log('CLS:', metric.value);
        onPerfEntry(metric);
      });
      getFID(metric => {
        console.log('FID:', metric.value);
        onPerfEntry(metric);
      });
      getFCP(metric => {
        console.log('FCP:', metric.value);
        onPerfEntry(metric);
      });
      getLCP(metric => {
        console.log('LCP:', metric.value);
        onPerfEntry(metric);
      });
      getTTFB(metric => {
        console.log('TTFB:', metric.value);
        onPerfEntry(metric);
      });
    });
  }
};

export default reportWebVitals;

