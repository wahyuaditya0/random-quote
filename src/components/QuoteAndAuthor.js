import React from "react";
import quotes from "../QuoteDB";
import "../App.css";

export default function QuoteAndAuthor(props) {
  const { quote, generateRandomQuote } = props;
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text text-center">{quote.quote}</p>
        <p className="text-center">
          <cite className="card-title text-center">- {quote.author}</cite>
        </p>
        <br></br>
        <div class="text-center">
          <button
            onClick={() => {
              generateRandomQuote(quotes);
              window.open(
                "https://twitter.com/intent/tweet/?text=" +
                  encodeURIComponent(quote.quote + "--" + quote.author)
              );
            }}
            type="submit"
            className="ml-3 btn btn-primary text-center"
          >
            <i class="fab fa-mouse"></i> Share Quote
          </button>
          <button
            onClick={() => generateRandomQuote(quotes)}
            type="submit"
            className="btn btn-success text-center ml-3"
          >
            <i class="fas fa-twitter"></i> Generate Quote{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
