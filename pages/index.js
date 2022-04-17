import Head from "next/head";
import {
  BiBellMinus,
  BiBook,
  BiBrightness,
  BiChevronDownCircle,
  BiDonateHeart,
  BiLockAlt,
  BiMap,
  BiMessageMinus,
} from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FYP-22-S2-10 - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="">
        <div className="home-bg d-flex justify-content-center align-items-center px-4">
          <h1 className="text-center text-light">
            Dental Health Record Management System
          </h1>
        </div>

        <div className="py-5 bg-light">
          <h2 className="text-center">Features</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 container mx-auto">
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiBellMinus style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiBook style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiBrightness style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiChevronDownCircle style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiDonateHeart style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiLockAlt style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiMap style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="text-muted flex-shrink-0 me-3">
                <BiMessageMinus style={{ fontSize: "20px" }} />
              </div>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 px-4" style={{ background: "#062228" }}>
          <h2 className="text-center text-light">Contact Us</h2>

          <div
            className="mx-auto container pt-5 pb-1"
            style={{ maxWidth: "550px" }}
          >
            <form
              className=""
              action="POST"
              data-netlify="true"
              onInvalid={() => alert("You must fill out the form!")}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label h5 text-light">
                  Name:
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Name"
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label h5 text-light">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <h5 className="text-light">Subject:</h5>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label h5 text-light">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>

              <div className="mx-auto mt-4 text-center">
                <button
                  id="submit"
                  type="submit"
                  href="/"
                  className="btn btn-submit-contact"
                >
                  <b>Submit</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
