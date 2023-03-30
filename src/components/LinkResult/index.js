import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const LinkResult = ({ InputValue }) => {
  console.log(InputValue);
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${InputValue}`);
      setShortenLink(res.data.result.full_short_link)
    } catch (err) {
      setError(true)
    } finally {
        setLoading(false);
    }
  };
  useEffect(() => {
    if (InputValue.length) {
      fetchData();
    }
  }, [InputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  if(loading){
    return <p className="text-blue-600 py-2">Түр хүлээн үү. . </p>
  }
  if(error){
    return <p className="text-red-600 py-2">Уучлаарай.. Алдаа гарлаа холбоосоо шалгаад дахин оролдон уу :(  </p>
  }
  return (
    <div className="my-4">
      <div className="text-blue-500 my-2 border-2 rounded"> { shortenLink}</div>
      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button className={copied ? "bg-blue-300 text-white font-bold py-2 px-4 rounded" : "transition ease-in-out bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 "}>
          Хуулах
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
