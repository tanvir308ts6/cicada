/* overlay */
#about_comtainer {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: #979797; */
  background: rgba(17, 30, 148, 0.603);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.container:hover .overlay {
  width: 100%;
}

.text {
  color: rgb(255, 255, 255);
  font-size: 20px;
  position: absolute;
  border: 1px solid #fff;
  background-color:transparent;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}



/* about_us_description */
#about_us_description p{
text-align: justify;
}
