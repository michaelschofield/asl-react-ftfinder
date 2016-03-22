/*------------------------------------*\
  Full Text Finder
  - A React component loaded with
  - RequireJS. React and ReactDOM must
  - be defined for this use.
\*------------------------------------*/

define(['react', 'reactDOM'], function (React, ReactDOM) {

  /**
   * Creates the Full Text Finder component.
   * @returns <FullTextForm />
   */

  var FullTextForm = React.createClass({
    displayName: 'FullTextForm',


    getDefaultProps: function () {
      return {
        action: 'https://sherman.library.nova.edu/api/ftf.php'
      };
    },

    render: function () {
      return React.createElement(
        'form',
        { id: 'ftf-form', className: 'form js-full-text-finder', action: this.props.action, target: '_self', method: 'post' },
        React.createElement('input', { type: 'hidden', name: 'action', value: 'ftf_search' }),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            { className: 'form__field no-margin clearfix' },
            React.createElement(
              'div',
              { className: 'col-md--threecol' },
              React.createElement(
                'div',
                { className: 'form__select form__input--full-width' },
                React.createElement(
                  'select',
                  { name: 'filter', 'ng-model': 'fc.filterTitle' },
                  React.createElement(
                    'option',
                    { value: 'startsWith' },
                    'Exact Phrase'
                  ),
                  React.createElement(
                    'option',
                    { value: '' },
                    'Contains'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md--ninecol' },
              React.createElement(
                'label',
                { className: 'form__label hide-accessible', htmlFor: 'searchtext' },
                'Search title'
              ),
              React.createElement('input', { autoComplete: 'off', id: 'searchtext', className: 'form__input form__input--full-width', name: 'searchtext', type: 'text', size: '23', placeholder: 'Enter title',
                'ng-model': 'fc.model',
                'ng-model-options': '{ debounce: 300 }',
                'ng-change': 'fc.getTitles(fc.model)' })
            )
          ),
          React.createElement(
            'li',
            { className: 'clearfix form__field no-margin' },
            React.createElement(
              'div',
              { className: 'col-md--sixcol' },
              React.createElement('input', { className: 'checkbox-toggle', type: 'checkbox', id: 'chkPeerReviewed', name: 'chkPeerReviewed' }),
              React.createElement(
                'label',
                { className: 'button button--small small-text button--flat button--unselect', htmlFor: 'chkPeerReviewed' },
                'Only ',
                React.createElement(
                  'b',
                  null,
                  'Peer Reviewed'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md--sixcol align-right' },
              React.createElement(
                'button',
                { className: 'button button--primary button--small small-text', value: 'Search', type: 'submit' },
                'Search'
              )
            )
          )
        )
      );
    }
  });

  /**
   * Render the React component on such-and-such element.
   */
  ReactDOM.render(React.createElement(FullTextForm, null), document.querySelector('.jsx-ftf'));
});