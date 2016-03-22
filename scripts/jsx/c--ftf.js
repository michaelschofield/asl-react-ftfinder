/*------------------------------------*\
  Full Text Finder
  - A React component loaded with
  - RequireJS. React and ReactDOM must
  - be defined for this use.
\*------------------------------------*/

define( ['react', 'reactDOM'], function( React, ReactDOM ) {

  /**
   * Creates the Full Text Finder component.
   * @returns <FullTextForm />
   */

  var FullTextForm = React.createClass({

    getDefaultProps: function() {
      return {
        action: 'https://sherman.library.nova.edu/api/ftf.php'
      }
    },

    render: function() {
      return (

        <form id="ftf-form" className="form js-full-text-finder" action={this.props.action} target="_self" method="post">
          <input type="hidden" name="action" value="ftf_search" />
          <ul>
            <li className="form__field no-margin clearfix">
              <div className="col-md--threecol">
                <div className="form__select form__input--full-width">
                  <select name="filter" ng-model="fc.filterTitle">
                    <option value="startsWith">Exact Phrase</option>
                    <option value="">Contains</option>
                  </select>
                </div>

              </div>

              <div className="col-md--ninecol">
                <label className="form__label hide-accessible" htmlFor="searchtext">Search title</label>
                <input autoComplete="off" id="searchtext" className="form__input form__input--full-width" name="searchtext" type="text" size="23" placeholder="Enter title"
                     ng-model="fc.model"
                     ng-model-options="{ debounce: 300 }"
                     ng-change="fc.getTitles(fc.model)" />
              </div>
            </li>

            <li className="clearfix form__field no-margin">
              <div className="col-md--sixcol">
                <input className="checkbox-toggle" type="checkbox" id="chkPeerReviewed" name="chkPeerReviewed"  />
                <label className="button button--small small-text button--flat button--unselect" htmlFor="chkPeerReviewed">Only <b>Peer Reviewed</b></label>
              </div>
              <div className="col-md--sixcol align-right">
                <button className="button button--primary button--small small-text" value="Search" type="submit">Search</button>
              </div>
            </li>
          </ul>
        </form>

      )
    }
  });

  /**
   * Render the React component on such-and-such element.
   */
  ReactDOM.render( <FullTextForm />, document.querySelector( '.jsx-ftf' ) );

});
