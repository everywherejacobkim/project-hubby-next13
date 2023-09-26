import React, { ChangeEvent, FormEvent, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const NotesModal = ({
  modalIsOpen,
  handleAddNote,
  handleChange,
  state,
}: {
  modalIsOpen: boolean;
  handleAddNote: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  state: any;
}) => {
  const [textToCopy, setTextToCopy] = useState<any>();


  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { listening, transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
      return null
  }

  return (
    <div>
      <div className={`modal ${modalIsOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" bg-white dark:bg-neutral-dark p-6 rounded-md w-1/2">
            <form onSubmit={handleAddNote}>
              <textarea
                value={transcript}
                rows={11}
                onChange={handleChange}
                className="dark:bg-neutral-box p-2 w-full mb-2 rounded-md border border-gray-200 dark:border-neutral focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent "
              />
               {/* <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div> */}
              <div  className="flex justify-between gap-2">
                <div>
                  {listening ? 
                   <button className="px-4 py-2 bg-primary-warning text-white rounded-md" onClick={SpeechRecognition.stopListening}>Stop</button>
                   
                  :
                  <button className="px-4 py-2 bg-primary-action text-white rounded-md" onClick={startListening}>Start</button>
                  }
                </div>
                <div>
                  <button className="px-4 py-2 bg-primary text-neutral rounded-md">
                    Delete
                  </button>
                  <input
                  type="submit"
                  name="submitNote"
                  value="Save"
                  className="px-4 py-2 bg-primary-action text-white rounded-md hover:cursor-pointer"
                />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`overlay fixed inset-0 bg-black/10 z-40 ${
            modalIsOpen ? "block" : "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default NotesModal;
