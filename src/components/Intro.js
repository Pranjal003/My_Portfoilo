import React from "react";

export default function Intro() {
  return (
    <>
      <div>
        <div class="text-start" >
          <div class="row" style={{height:'90vh'}}>
            <div class="col-7" style={{padding: '0px', paddingLeft: '15px'}}>
              <span class="d-block " style={{height:'60vh'}}>
              <span class="badge text-bg-success" >Success</span>
            <h1 >Hi! I am </h1>
            <h1>Pranjal Sharma.</h1>
            <p>Junior year student | VIT | Optimist | Performer | Content creator | Hustler</p>
            <button type="button" class="btn btn-primary">
            UI/UX
            </button>
            <button type="button" class="btn btn-primary">
            Backend
            </button>
            <button type="button" class="btn btn-primary">
            DATABASE
            </button>
            <button type="button" class="btn btn-primary">
            Probelm solving
            </button>
            <button type="button" class="btn btn-primary">
            Machine Learning
            </button>
              </span>
              <span class="d-block  bg-dark text-white" style={{height:'30vh'}}>d-block</span>
            </div>
            <div class="col" style={{backgroundColor : '#D2D4C8'}}>Column</div>
          </div>
        </div>
      </div>
    </>
  );
}
