import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-element';
import { fn } from '@storybook/test';
import  '../../../../out-tsc/src/components/playing-card/playing-card';

const meta = {
  title: 'Marcelo/Playing-card',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: "",
} 

export const Default = () =>{
    return html`
        <wc-playing-card></wc-playing-card>
    `
}

export default meta;