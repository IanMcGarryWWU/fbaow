import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
          <div>
          <a href="https://www.facebook.com/search/top?q=bioregional%20animism%20discussion%20and%20resource%20sharing">Bioregional Animism Discussion and Resource Sharing</a>
          </div>
          <div>
          <a href="https://www.facebook.com/groups/920150431523616">Regenerative Consciousness Community</a>
          </div>
  </footer>
    );
  }
}

export default Footer;
