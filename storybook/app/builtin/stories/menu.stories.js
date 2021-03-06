/* eslint-disable import/default */

import { storiesOf } from 'dev-novel';
import instantsearch from '../../instantsearch';
import { wrapWithHits } from '../../utils/wrap-with-hits.js';

const stories = storiesOf('Menu');

export default () => {
  stories
    .add(
      'default',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.menu({
            container,
            attribute: 'categories',
          })
        );
      })
    )
    .add(
      'with transformed items',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.menu({
            container,
            attribute: 'categories',
            transformItems: items =>
              items.map(item => ({
                ...item,
                label: `${item.label} (transformed)`,
              })),
          })
        );
      })
    )
    .add(
      'with show more',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.menu({
            container,
            attribute: 'categories',
            limit: 3,
            showMore: true,
          })
        );
      })
    )
    .add(
      'with show more and showMoreLimit',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.menu({
            container,
            attribute: 'categories',
            limit: 3,
            showMore: true,
            showMoreLimit: 6,
          })
        );
      })
    )
    .add(
      'with show more and templates',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.menu({
            container,
            attribute: 'categories',
            limit: 3,
            showMore: true,
            showMoreLimit: 10,
            templates: {
              showMoreText: `
                {{#isShowingMore}}
                  ⬆️
                {{/isShowingMore}}
                {{^isShowingMore}}
                  ⬇️
                {{/isShowingMore}}`,
            },
          })
        );
      })
    );
};
