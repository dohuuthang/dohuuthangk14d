import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Ai Là Người Thương Em',
    artist: 'Quân AP',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/a.jpg?alt=media&token=067c9165-39c5-4789-9a1f-422ea24ec814",
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/baihat%2FAi-La-Nguoi-Thuong-Em-Quan-A-P.mp3?alt=media&token=245f0c15-cea6-4133-8df5-dd3e24363056",
  },
  {
    title: 'Có Tất Cả Nhưng Thiếu Em',
    artist: 'Erik',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/a.jpg?alt=media&token=067c9165-39c5-4789-9a1f-422ea24ec814",
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/baihat%2FCo-Tat-Ca-Nhung-Thieu-Anh-ERIK.mp3?alt=media&token=fb2df551-8260-4885-b2ba-4a5014d3b92f',
  },
  {
    title: 'Hết Thương Cạn Nhớ',
    artist: 'Đức Phúc',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/2.jpg?alt=media&token=59800573-5841-45ba-b415-c0aad78d519c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/baihat%2Fhetthuongcannho.mp3?alt=media&token=b472df31-baa3-41bb-b616-464fc691b75c',
  },
  {
    title: 'Hồng Nhan',
    artist: 'Jack',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/2.jpg?alt=media&token=59800573-5841-45ba-b415-c0aad78d519c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/baihat%2FHong-Nhan-Jack.mp3?alt=media&token=744ab2b2-9424-4aa1-a81d-75ae7e3c41bc',
  },
  {
    title: 'Sóng Gió',
    artist: 'Jack',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/2.jpg?alt=media&token=59800573-5841-45ba-b415-c0aad78d519c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/baihat%2FSong-Gio-Jack-K-ICM.mp3?alt=media&token=a401f1ac-2c6b-474c-be7c-ce133c5f3b1b',
  },
  {
    title: 'Thay Tôi Yêu Cô Ấy',
    artist: 'Thanh Hưng',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/2.jpg?alt=media&token=59800573-5841-45ba-b415-c0aad78d519c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/appmp3-26a2a.appspot.com/o/baihat%2FThay-Toi-Yeu-Co-Ay-Thanh-Hung.mp3?alt=media&token=910a3364-db12-4b06-a875-85de2595113f',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


