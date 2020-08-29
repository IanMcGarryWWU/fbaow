import React, { Component } from 'react';

class Resume extends Component {


  render() {

    if(this.props.data){
      var quotes = this.props.data.quotes.map(function(quotes){
        return <div key={quotes.author}>
            <p className="quote">{quotes.text}</p>
            <h1>{quotes.author}</h1>
        </div>
      })
    }

    return (
      <section id="resume">
          <div className={"quote-title"}> Quotes </div>
      <div className="row education">
          <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {quotes}
               </div>
            </div>
         </div>
      </div>



   </section>
    );
  }
}

export default Resume;
