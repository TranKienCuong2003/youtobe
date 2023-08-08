const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Render videos
function renderVideos() {
    const listVideos = [
        {
            linkVideo: './list-videos/video1.html',
            avatar: 'ctdlgt1.jpg',
            time: '1:51:53',
            channelAvatar: 'logo_28tech.jpg',
            title: '[CTDL và GT]. Buổi 1. Vector, Iterator, Pair, Set Trong C++',
            author: '28tech',
            view: '3,3 N lượt xem',
            date: '3 ngày trước'
        },

        {
            linkVideo: './list-videos/video2.html',
            avatar: 'mucluong_sondang.jpg',
            time: '6:35',
            channelAvatar: 'f8.png',
            title: 'Mức lương đầu tiên nhận được khi bước vào ngành lập trình của Sơn Đặng F8 - Talk With Me| Lofi Chill',
            author: 'F8 Official',
            view: '12 N lượt xem',
            date: '1 tháng trước'
        },

        {
            linkVideo: './list-videos/video3.html',
            avatar: 'a_loi.webp',
            time: '3:13',
            channelAvatar: 'gia_dinh_lon.jpg',
            title: 'Double2T x Masew - À Lôi | Official Lyric Video @Masewprod @Double2TOfficial',
            author: 'Gia Đình Lớn',
            view: '15 Tr lượt xem',
            date: '3 tuần trước'
        },

        {
            linkVideo: './list-videos/video4.html',
            avatar: 'tugadenprogithub.jpg',
            time: '17:39',
            channelAvatar: 'pham_huy_hoang.jpg',
            title: 'Từ gà tới pro Git và Github trong 20 phút - Tự học Git siêu tốc',
            author: 'Phạm Huy Hoàng',
            view: '620 N lượt xem',
            date: '3 năm trước'
        },

        {
            linkVideo: './list-videos/video5.html',
            avatar: 'laptrinhcobanc++.jpg',
            time: '31:59',
            channelAvatar: 'vunguyencoder.jpg',
            title: 'Tự học lập trình C++ siêu dễ hiểu | Code ngay chương trình tính toán chỉ số cơ thể | Vũ Nguyễn Coder',
            author: 'Vũ Nguyễn Coder',
            view: '1 Tr lượt xem',
            date: '2 năm trước'
        },

        {
            linkVideo: './list-videos/video6.html',
            avatar: 'ai_no.jpg',
            time: '3:52',
            channelAvatar: 'masew.jpg',
            title: 'Ái Nộ - Masew x Khoi Vu (Tiếp tục là sản phẩm thứ 2 nằm trong album của mình . Mong rằng mọi người sẽ thích nó !!!)',
            author: 'Masew',
            view: '59 Tr lượt xem',
            date: '1 năm trước'
        },

        {
            linkVideo: './list-videos/video7.html',
            avatar: 'khong_gian_4_chieu_-_tri_tue_nhan_tao_cua_dung_lai_lap_trinh.jpg',
            time: '38:47',
            channelAvatar: 'dung_lai_lap_trinh.jpg',
            title: 'Không gian 4 chiều | Bài giảng hay nhất về Trí Tuệ Nhân Tạo của Dũng Lại Lập Trình',
            author: 'Dũng Lại Lập Trình',
            view: '371 N lượt xem',
            date: '2 năm trước'
        },

        {
            linkVideo: './list-videos/video8.html',
            avatar: 'mixi_gaming.jpg',
            time: '2:18:31',
            channelAvatar: 'mixi_gaming_avatar.jpg',
            title: 'Full Livestream 21/7/2021.(Chủ Nhật chỉ live bên nimo.tv/mixi vào 23:00)',
            author: 'MixiGaming',
            view: '1,4 Tr lượt xem',
            date: '2 năm trước'
        },

        {
            linkVideo: './list-videos/video9.html',
            avatar: 'chi_dau_parody.jpg',
            time: '5:29',
            channelAvatar: '1977_vlog.jpg',
            title: '1977 Vlog - Chị Dậu Parody - Kỷ Nguyên Hắc Ám',
            author: '1977 Vlog',
            view: '23 Tr lượt xem',
            date: '3 năm trước'
        },

        {
            linkVideo: './list-videos/video10.html',
            avatar: 'best_of_ncs.webp',
            time: '1:51:56',
            channelAvatar: 'luna_sounds.jpg',
            title: 'Top 30 NoCopyrightSounds | Best of NCS | Most Viewed Songs | The Best of All Time | 2023',
            author: 'Luna Sounds',
            view: '966 N lượt xem',
            date: '3 tháng trước'
        },

        {
            linkVideo: './list-videos/video11.html',
            avatar: 'kinh_ngiem_lap_trinh_web_sondang.jpg',
            time: '16:23',
            channelAvatar: 'f8.png',
            title: 'Chia sẻ kinh nghiệm ngành lập trình của Sơn Đặng F8 - Talk With Me | Lofi Chill',
            author: 'F8 OfficiaL',
            view: '9,1 N lượt xem',
            date: '8 tháng trước'
        },

        {
            linkVideo: './list-videos/video12.html',
            avatar: 'cafe_khong_duong.jpg',
            time: '5:33',
            channelAvatar: 'hoa_hong_dai.jpg',
            title: '♬ CAFE KHÔNG ĐƯỜNG - JOMBIE x TKAN X BEAN ( HHD REMIX ) | NHỚ ĐEO TAI NGHE |',
            author: 'HOA HỒNG DẠI',
            view: '14 Tr lượt xem',
            date: '2 năm trước'
        },

        {
            linkVideo: './list-videos/video13.html',
            avatar: 'chay_ngay_di.jpg',
            time: '4:33',
            channelAvatar: 'son_tung_mtp.jpg',
            title: 'CHẠY NGAY ĐI | RUN NOW | SƠN TÙNG M-TP | Official Music Video',
            author: 'Sơn Tùng M-TP Official',
            view: '155 Tr lượt xem',
            date: '5 năm trước'
        },

        {
            linkVideo: './list-videos/video14.html',
            avatar: 'setup_window_vunguyencoder.jpg',
            time: '47:53',
            channelAvatar: 'vunguyencoder.jpg',
            title: 'Hướng dẫn setup siêu tốc mọi thứ để lập trình trên Window | Acer Aspire 7 ✖ Vũ Nguyễn Coder',
            author: 'Vũ Nguyễn Coder',
            view: '18 N lượt xem',
            date: '2 tuần trước'
        },

        {
            linkVideo: './list-videos/video15.html',
            avatar: 'quan_diem_hoc_lap_trinh.jpg',
            time: '24:05',
            channelAvatar: 'f8.png',
            title: 'Phương pháp HỌC LẬP TRÌNH của Sơn Đặng! | Lộ trình học lập trình | Phương pháp học lập trình',
            author: 'F8 OfficiaL',
            view: '115 N lượt xem',
            date: '2 năm trước'
        },

        {
            linkVideo: './list-videos/video16.html',
            avatar: 'hoi_va_dap_ve_nganh_it.jpg',
            time: '17:37',
            channelAvatar: 'f8.png',
            title: 'Hỏi & Đáp về ngành IT cùng Sơn Đặng F8 | Lofi Chill',
            author: 'F8 OfficiaL',
            view: '13 N lượt xem',
            date: '8 tháng trước'
        },

    ]

    let videos = $('.render-list-videos');
    let video = '';

    for(getVideo of listVideos) {
        video += `
                        <div class="col-3 col-video-mb add-video-translateX product_video-X">
                            <div class="product_video">
                                <a href="${getVideo.linkVideo}" class="product_video-link">
                                    <div class="product_video-img">
                                        <img  src="./assets/img/${getVideo.avatar}" alt="Avatar Video" class="product_video-img-main product_video-img-main-X">
                                        <span class="product_video-img-time">${getVideo.time}</span>

                                        <div class="videos-icon-play">
                                            <i class="bx bx-play"></i>
                                        </div>

                                        <ul class="videos_list-icon-hover">
                                            <li class="videos_item-icon-hover videos_item-icon-hover-time">
                                                <i class="bx bxs-time bxf-time"></i>
                                                
                                                <div class="list-icon-skiing-time">
                                                <span>Xem sau</span>
                                                </div>   
                                            </li>

                                            <li class="videos_item-icon-hover videos_item-icon-hover-list-ul">
                                                <i class="bx bx-list-ul bxf-list-ul"></i>

                                                <div class="list-icon-skiing-ul">
                                                <span>Thêm vào danh sách chờ</span>
                                                </div>
                                            </li>
                                        </ul>

                                        
                                    </div>

                                    <div class="product_video_content">
                                        <div class="product_video-img-user">
                                            <img src="./assets/img/${getVideo.channelAvatar}" alt="Avatar Channel">
                                        </div>

                                        <div class="product_video-description">
                                            <div class="product_video-title">
                                                <h4>${getVideo.title}</h4>
                                            </div>

                                          <div class="product_video-user-channel-content">
                                                <div class="product_video_user-chanel">
                                                    <span class="product_video_user-name">${getVideo.author}</span>
                                                    <span class="product_video_user-verified">
                                                        <i class="bx bxs-check-circle"></i>
                                                    </span>
                                                </div>

                                                <div class="product_video-info">
                                                    <span class="product_video-info-view">${getVideo.view}</span>
                                                    <span class="product_video-info-dot">
                                                        <i class="fas fa-circle"></i>
                                                    </span>
                                                    <span class="product_video-info-date">${getVideo.date}</span>
                                                </div>
                                          </div>

                                            <div class="product_video-option">
                                                <i class="bx bx-dots-vertical-rounded bxf-dots-vertical-rounded-video"></i>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                    </div> 

                  `
    }

    videos.innerHTML = video;
}

renderVideos();

//Khi click vào navbar
const navMenuClick = $('.nav-bar-click');
const sliderBar = $('.slider_bar');
const barChange = $('.btn-click');
const sliderSmall = $('.slider-small');
const containerVideos = $('.container-videos');
const productVideosX = $('.product_videos-total');
const addTranslateX = $$('.add-video-translateX');
const addTranslateImgX = $$('.product_video-img-main');
const scrollWhenClick = $('.slider_container_scroll');
const navBarTransformNextBtn = $('.next-btn');
const navBarFixSlider = $('.container_scroll-list');

//Hiệu ứng nhấp nháy khi người dùng ấn chuột xuống và nhả chuột ra
navMenuClick.onmouseup = () => {
    barChange.classList.add('btn-up');
    barChange.classList.remove('btn-down');
};

navMenuClick.onmousedown = () => {
    barChange.classList.remove('btn-up');
    barChange.classList.add('btn-down');
    
};

navMenuClick.onclick = () => {
    sliderBar.classList.toggle('bar-active');
    sliderSmall.classList.toggle('show-small');


    //Dịch chuyển thanh trượt slider khi click vào navbar
    scrollWhenClick.classList.toggle('scroll-when-click');


    //Dịch chuyển container_scroll-list khi click vào navbar
    navBarFixSlider.classList.toggle('container_scroll-list-fix-navbar');


    //Dịch chuyển nút next-btn khi click vào navbar
    navBarTransformNextBtn.classList.toggle('next-transform-btn');

    
    //fix lại width của container khi click vào navbar
    containerVideos.classList.toggle('container-videos-X');
    productVideosX.classList.toggle('product_videos-total-X');


    addTranslateX.forEach((itemCol) => {
        itemCol.classList.toggle('product_video-X'); //Kiểm tra khi có class này thì thêm vô --> không có thì xóa đi
    });

    addTranslateImgX.forEach((itemImg) => {
        itemImg.classList.toggle('product_video-img-main-X'); //Kiểm tra khi có class này thì thêm vô --> không có thì xóa đi
    })
    
};


//Khi click vào Hiển thị thêm
const sliderBtn = $('#item-js');
const itemChange = $$('.item-change');
const btnDownToUp = $('.bx-chevron-down');
const btnClickHtt = $('.btn_click-htt');

sliderBtn.onclick = () => {
    itemChange.forEach((item) => {
        item.classList.toggle('on');   
    });
    btnDownToUp.classList.toggle('btn-arrow-up'); 

    //Kiểm tra nếu có class btn-arrow-up thì inner 'Ẩn bớt" nếu không có --> thì inner 'Hiển thị thêm'
    const btn_icon_fix = $('.btn-arrow-up')
    if(btn_icon_fix) {
        btnClickHtt.innerHTML = 'Ẩn bớt';
    }else {
        btnClickHtt.innerHTML = 'Hiển thị thêm'             
    };
}


//When click on microphone
const micClickBtn = $('.header_microphone');
const micBtn = $('.item-mic');
const micModal = $('.modal_mic');
const micOverlay = $('.overlay-mic');
const mic_title = $('.mic_title');
const micBoxWhenClick = $('.mic_box');
const micDescription = $('.mic_description');
const micClose = $('.btn-x');
const barChange2 = $('.btn-click-2')



var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();

recognition.lang = 'vi-VI';
recognition.continuous = false;

micBtn.onclick = (e) => {
    mic_title.innerHTML = 'Đang nghe...';
    mic_title.style.userSelector = 'none';
    e.preventDefault();
    micClickBtn.classList.toggle('mic_click');
    recognition.start();
    micBoxWhenClick.classList.toggle('mic-active');
    micDescription.style.display = 'none'
};


//Listener click on dấu X
micClose.onclick = () => {
    micClickBtn.classList.remove('mic_click');
};

//Listener click on overlay
micOverlay.onclick = () => {
    micClickBtn.classList.remove('mic_click');
};

micBtn.onmouseup = () => {
    barChange2.classList.toggle('btn-up-mic');
    barChange2.classList.remove('btn-down-mic');
};

micBtn.onmousedown = () => {
    barChange2.classList.remove('btn-up-mic');
    barChange2.classList.toggle('btn-down-mic');
    
};

recognition.onspeechend = () => {
    recognition.stop();
};

// recognition.onerror = (err) => {
//   let text = err.type

//   if(text === 'error') {
//     mic_title.innerHTML = 'Tôi chưa nghe rõ.Mời bạn nói lại';
//     micBoxWhenClick.classList.remove('mic-active')
//   }
// }

// recognition.onresult = (e) => {
    
// }


//When click on videos
const iconVideos = $('.item-videos')
const clickVideos = $('.btn-click-3');

iconVideos.onmouseup = () => {
    clickVideos.classList.toggle('btn-up-videos');
    clickVideos.classList.remove('btn-down-videos');
    listVideosDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });

};

iconVideos.onmousedown = () => {
    clickVideos.classList.remove('btn-up-videos');
    clickVideos.classList.toggle('btn-down-videos');
    listVideosDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });

};



//When click on grid
const iconGrid = $('.item-grid')
const clickGrid = $('.btn-click-4');

iconGrid.onmouseup = () => {
    clickGrid.classList.toggle('btn-up-grid');
    clickGrid.classList.remove('btn-down-grid');        
    listGridDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });
};

iconGrid.onmousedown = () => {
    clickGrid.classList.remove('btn-up-grid');
    clickGrid.classList.toggle('btn-down-grid');   
    listGridDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
    
};



//When click on grid
const iconBell = $('.item-bell')
const clickBell = $('.btn-click-5');

iconBell.onmouseup = () => {
    clickBell.classList.toggle('btn-up-bell');
    clickBell.classList.remove('btn-down-bell');
    listBellDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });
};

iconBell.onmousedown = () => {
    clickBell.classList.remove('btn-up-bell');
    clickBell.classList.toggle('btn-down-bell');
    listBellDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
};


// when click on videos show list-down
const videoOnClick = $('.item-videos');
const listVideosDown = $('.videos_list-down');
const gridOnClick = $('.item-grid');
const listGridDown = $('.grid_down');
const bellOnclick = $('.item-bell');
const listBellDown = $('.bell_down');
const userOnclick = $('.item-user');
const listUserDown = $('.user_down');
const borderUserClick = $('.border_user-avatar')

videoOnClick.onclick = (e) => {
    listVideosDown.classList.toggle('active');
    listGridDown.classList.remove('active');
    listBellDown.classList.remove('active');
}

//Ngăn chặn sự kiện nổi bọt
listVideosDown.addEventListener('click', (e) => {
    e.stopPropagation();
});

gridOnClick.onclick = () => {
    listGridDown.classList.toggle('active');
    listVideosDown.classList.remove('active');
    listBellDown.classList.remove('active');
};

//Ngăn chặn sự kiện nổi bọt và mặc định của trình duyệt
listGridDown.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

bellOnclick.onclick = () => {
    listBellDown.classList.toggle('active');
    listVideosDown.classList.remove('active');
    listGridDown.classList.remove('active');
};

//Ngăn chặn sự kiện nổi bọt
listBellDown.addEventListener('click', (e) => {
    e.stopPropagation();
});

userOnclick.onclick = () => {
    listUserDown.classList.toggle('active');
    listBellDown.classList.remove('active');
    listVideosDown.classList.remove('active');
    borderUserClick.classList.toggle('border_user-click');
};

//Ngăn chặn sự kiện nổi bọt
listUserDown.addEventListener('click', (e) => {
    e.stopPropagation();
});


       