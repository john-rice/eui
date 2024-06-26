/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { requiredProps } from '../../../test';
import { shouldRenderCustomStyles } from '../../../test/internal';
import { render } from '../../../test/rtl';

import { EuiColorPaletteDisplay, SIZES } from './color_palette_display';

const palette = ['#1fb0b2', '#ffdb6d', '#ee9191', '#ffffff', '#888094'];

const paletteWithStops = [
  {
    stop: 100,
    color: '#54B399',
  },
  {
    stop: 250,
    color: '#D36086',
  },
  {
    stop: 350,
    color: '#9170B8',
  },
  {
    stop: 470,
    color: '#F5A700',
  },
];

describe('EuiColorPaletteDisplay', () => {
  shouldRenderCustomStyles(<EuiColorPaletteDisplay palette={palette} />);

  test('is rendered', () => {
    const { container } = render(
      <EuiColorPaletteDisplay {...requiredProps} palette={palette} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('props', () => {
    describe('type and palette', () => {
      it('are rendered with type fixed and palette without stops', () => {
        const { container } = render(
          <EuiColorPaletteDisplay
            {...requiredProps}
            palette={palette}
            type="fixed"
          />
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it('are rendered with type gradient and palette without stops', () => {
        const { container } = render(
          <EuiColorPaletteDisplay
            {...requiredProps}
            palette={palette}
            type="gradient"
          />
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it('are rendered with type fixed and palette with stops', () => {
        const { container } = render(
          <EuiColorPaletteDisplay
            {...requiredProps}
            palette={paletteWithStops}
            type="fixed"
          />
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it('are rendered with type gradient and palette with stops', () => {
        const { container } = render(
          <EuiColorPaletteDisplay
            {...requiredProps}
            palette={paletteWithStops}
            type="gradient"
          />
        );

        expect(container.firstChild).toMatchSnapshot();
      });
    });

    describe('size', () => {
      SIZES.forEach((size) => {
        it(`${size} is rendered`, () => {
          const { container } = render(
            <EuiColorPaletteDisplay
              {...requiredProps}
              size={size}
              palette={palette}
            />
          );

          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });

    describe('HTML attributes', () => {
      it('accepts span attributes', () => {
        const { container } = render(
          <EuiColorPaletteDisplay
            {...requiredProps}
            palette={palette}
            type="fixed"
            id="id"
            title="title"
          />
        );

        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
