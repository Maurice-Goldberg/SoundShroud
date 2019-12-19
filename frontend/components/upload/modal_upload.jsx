const ModalUpload = ({handleTrackFile, closeModal}) => {
  return (

    <div className="modal-background">
      <div className="modal-child">
        <div className="modal-upload-wrapper">
          <p className="modal-upload-box">Drop your files here</p>
        
          {/* MAKE THIS INPUT DISPLAY NONE AND TAKE UP THE ENTIRE SCREEN */}
          <input type="file"
            onDrop={(event) => {
              handleTrackFile(event);
              closeModal();
            }
          }/>
        </div>  
      </div>
    </div>

  )
}

export default ModalUpload;