import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var aims = this.props.data.aims.map(function(aims){
            return <div key={aims.index} className={"aim-underneathgap"}><h2 className={"aim-header"}>{aims.index + ". "}</h2>
            <div className={"aim-container"}>{aims.text}</div></div>
        })
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Aims</h2>
             <div className={"aim-container"}>
             {aims}
             </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
