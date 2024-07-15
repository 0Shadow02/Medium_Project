export const AlertMessage = () => {
  return (
    <>
      <div
        className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 "
        role="alert"
      >
        <span className="font-medium">alert!</span> ! Please put the right
        credentials !
      </div>
    </>
  );
};
export const SignupMessage = () => {
  return (
    <>
      <div
        className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 "
        role="alert"
      >
        <span className="font-medium">alert!</span> ! User already exist !
      </div>
    </>
  );
};

export const PasswordReq = () => {
  return (
    <div>
      <div
        id="alert-border-2"
        className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 "
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div className="ms-3 text-sm font-medium">
          Please check the Password Requirements
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 "
          data-dismiss-target="#alert-border-2"
          aria-label="Close"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export const AlertPassword = () => {
  return (
    <div>
      <div
        className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 "
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Password requirements:</span>
          <ul className="mt-2 space-y-2 list-inside list-disc">
            <li>At least 8 characters long</li>
            <li>At least one uppercase character</li>
            <li>At least one lowercase character</li>
            <li>At least one number</li>
            <li>At least one special character (e.g., ! @ # ?)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const PublishAlert = () => {
  return (
    <div>
      <div
        id="alert-border-2"
        className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 "
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div className="ms-3 text-sm font-medium">
          Please fill the title and content table !
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 "
          data-dismiss-target="#alert-border-2"
          aria-label="Close"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const Error404 = () => {
  return (
    <div className=" flex justify-center">
      <img
        className="w-50% h-screen"
        src="https://th.bing.com/th/id/OIG4.6neNpX2R5BKf6UVaMmND?pid=ImgGn"
        alt="404"
      />
    </div>
  );
};
export const Error404b = () => {
  return (
    <div className=" flex justify-center h-screen bg-blue-900  ">
      <img
        className="w-50% h-screen  rounded-md"
        src="https://th.bing.com/th/id/OIG4.CNKQ0IA9FpoJNnGejG66?w=1024&h=1024&rs=1&pid=ImgDetMain"
        alt="404"
      />
    </div>
  );
};
