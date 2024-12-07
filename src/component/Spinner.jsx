const Spinner = () => {
  return (
    <>
      <div class="d-flex justify-content-center spinner">
        <div class="spinner-border spinnercir" role="status" style={{width:"3rem",height:"3rem"}}>
          
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default Spinner;
