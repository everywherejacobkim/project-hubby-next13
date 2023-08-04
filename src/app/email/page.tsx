import GmailApiQuickStart from "@/components/gmail/GmailApiQuickStart";
import React from "react";

type Props = {};

const EmailPage = (props: Props) => {
  return (
    <div>
      <h1>This is Email Page</h1>
      <GmailApiQuickStart />
    </div>
  );
};

export default EmailPage;
