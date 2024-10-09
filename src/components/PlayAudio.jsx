import React from 'react';

const data = [
   {
      name: 'Em của ngày hôm qua',
      lyrics:
         'Eh eh eh.. Em đang nơi nào... Can you feel me. Can you feel me. ',
      author: 'Sơn Tùng',
   },
   {
      name: 'Người Anh Em',
      lyrics: 'Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em',
      author: 'Nhạc Hoa, Lời Việt: Mạnh Thắng',
   },
];

const PlayAudio = () => {
   return (
      <div className="container">
         <div className="title">
            <span className="song">song</span>
            <span>-</span>
            <span className="art">art</span>
         </div>
         <div className="information">
            <div className="author">author</div>
         </div>

         <div className="action">
            <div className="control-btn">
               <button>pause</button>
               <button>next</button>
            </div>
         </div>
         <div className="processing">
            <div className="loading">loading</div>
            <div className="time-process">time process</div>
         </div>

         <div className="m-action">
            <button className="order">order</button>
            <button className="mixed">mixed</button>
            <div className="volumn">
               <span>icon</span>
               <span className="vol">vol</span>
            </div>
         </div>
      </div>
   );
};

export default PlayAudio;
