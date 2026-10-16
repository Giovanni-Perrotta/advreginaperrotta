
        .form-field input,
        .form-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid var(--neutral-300);
          background-color: #fff;
          padding: 12px 13px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--neutral-700);
          outline: none;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 130px;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--primary-600);
          box-shadow: 0 0 0 2px rgba(74, 14, 18, 0.08);
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: var(--neutral-400);
        }

        .contact-submit {
          width: 100%;
          border: none;
          background-color: var(--primary-700);
          color: #fff;
          padding: 14px 20px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          cursor: pointer;
          transition:
            background-color 0.3s ease,
            opacity 0.3s ease;
        }

        .contact-submit:hover {
          background-color: var(--primary-900);
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .form-success {
          padding: 12px 14px;
          background-color: #eef7ef;
          border: 1px solid #c8dfca;
          color: #315d36;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .form-error {
          padding: 12px 14px;
          background-color: #fff1f1;
          border: 1px solid #e1bcbc;
          color: #7a2020;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .contact {
            padding: 130px 0 80px;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .contact-form-wrap {
            padding: 36px;
            order: 1;
          }

          .contact-intro {
            order: 2;
          }
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 0 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .contact-form-wrap {
            padding: 28px 22px;
          }
        }
      `}</style>
    </section>
  );
}
