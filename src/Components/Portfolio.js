import React, { Component } from 'react';


class Portfolio extends Component {
  render() {

    if (this.props.data) {

      var videos = this.props.data.videos.map(function (video) {
        const opts = {
          height: '180',
          width: '320'
        };
        return (
              <iframe width="320" height="180"
                      src={"https://www.youtube.com/embed/" + video.id}
                      allowFullScreen="allowfullscreen"
              >
              </iframe>
        )
          })
    }

    return (
      <section id="portfolio">
        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of our videos</h1>

            <div className="videowrap">
              {videos}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
