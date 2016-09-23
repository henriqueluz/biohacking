export default ({ getState, dispatch }) => {
  return (next) => (action) => {

     if(action.type === "BIO_ACTIVITIES_REQUEST") {
       fetch('/activities.json')
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: "BIO_ACTIVITIES_SUCCESS",
            payload: data
          });
        });
     }

     if(action.type === 'BIO_ACTIVITIES_SUCCESS') {
       fetch('/count.json')
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: "BIO_COUNT_SUCCESS",
            payload: data.count
          });
        });
     }

    return next(action);
  }
}
