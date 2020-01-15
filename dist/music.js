const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
        {
            name: 'SAKURA',
            artist: 'いきものがかり',
            url: '/song/いきものがかり - SAKURA.mp3',
            cover: 'https://bkimg.cdn.bcebos.com/pic/d8f9d72a6059252d1a2fa840379b033b5bb5b9be?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
            lrc: '/lrc/SAKURA-生物股长 (いきものがかり).lrc'

        },
        {
            name: '可一可再',
            artist: 'Eason',
            url: '/song/陈奕迅,eason and the duo band - 可一可再.mp3',
            cover: 'https://bkimg.cdn.bcebos.com/pic/5fdf8db1cb1349547db7c3cf584e9258d0094aeb?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U5Mg==,xp_5,yp_5',
            lrc: '/lrc/可一可再-陈奕迅,eason and the duo band.lrc'

        },
        {
            name: '表态 (Live)',
            artist: '梁博,新秀',
            url: '/song/梁博,新秀 - 表态 (Live).mp3',
            cover: 'https://bkimg.cdn.bcebos.com/pic/b151f8198618367a37c2589d20738bd4b31ce523@wm_1,g_7,k_d2F0ZXIvYmFpa2UxODA=,xp_5,yp_5',
            lrc: '/lrc/表态 (Live)-梁博,新秀.lrc'

        },
        {
            name: 'Stay with You',
            artist: '龚子婕',
            url: '/song/龚子婕JessieG - Stay with You (To. JJ Lin).mp3',
            cover: 'https://bkimg.cdn.bcebos.com/pic/1f178a82b9014a907d011856a7773912b31bee1a?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
            lrc: '/lrc/Stay with You-龚子婕JessieG.lrc'
        },
        {
            name: '青鸟',
            artist: 'いきものがかり',
            url: '/song/いきものがかり - ブルーバード.mp3',
            cover: 'https://bkimg.cdn.bcebos.com/pic/d8f9d72a6059252d1a2fa840379b033b5bb5b9be?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
            lrc: '/lrc/ブルーバード (青鸟)-生物股长 (いきものがかり).lrc'
        }
    ]
});
