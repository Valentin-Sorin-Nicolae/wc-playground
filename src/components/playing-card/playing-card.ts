import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("wc-playing-card")
export class PlayingCard extends LitElement {
  @property()
  frontFace?: string;
  @property()
  backFace?: string;

  static styles = css`
        /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
        .playing-card {
        background-color: transparent;
        width: 402px;
        height: 571px;
        border: 1px solid #f1f1f1;
        perspective: 3000px; /* Remove this if you don't want the 3D effect */
        }

        /* This container is needed to position the front and back side */
        .playing-card__inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        }

        /* Do an horizontal flip when you move the mouse over the flip box container */
        .playing-card:hover .playing-card__inner {
        transform: rotateY(180deg);
        }

        /* Position the front and back side */
        .playing-card__face--front, .playing-card__face--back {
          & img{
            width: 100%;
            height: 100%;
          }
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        }

        /* Style the front side (fallback if image is missing) */
        .playing-card__fac--front {
        color: black;
        }

        /* Style the back side */
        .playing-card__face--back {
        transform: rotateY(180deg);
    `;

  render() {
    return html`
      <div class="playing-card">
        <div class="playing-card__inner">
          <div class="playing-card__face--front">
            <img
              src=${this.frontFace ||
              "https://opengameart.org/sites/default/files/oga-textures/92832/cardbackfacewhitebluesmallpattern.png"}
              alt="card front"
            />
          </div>
          <div class="playing-card__face--back">
            <img
              src=${this.backFace ||
              "https://opengameart.org/sites/default/files/oga-textures/92832/joker.png"}
              alt="card back"
            />
          </div>
        </div>
      </div>
    `;
  }
}
