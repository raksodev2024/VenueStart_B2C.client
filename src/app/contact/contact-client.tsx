// contact-client.tsx (Client Component)
"use client";

// import Modal from "../../components/modal";

// import { useState } from "react";

export default function ContactClient() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container px-5">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="d-flex flex-column gap-5">
              <div>
                <h2 className="fw-bold mb-2">Contact Us</h2>
                <p>
                  Most answers are just a click away! Our quickest support can
                  be found by using the search bar in the middle of this page to
                  enter a few keywords regarding your inquiry - chances are we
                  have the answer waiting for you! If you can’t find your answer
                  there, we look forward to assisting you in the following ways
                </p>
                <button
                  className="btn btn-custom"
                  // onClick={() => setIsModalOpen(true)}
                >
                  Submit a request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is the content of my modal.</p>
      </Modal> */}
    </>
  );
}
