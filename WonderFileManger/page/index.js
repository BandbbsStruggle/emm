import { gettext } from 'i18n'
import { Fx } from "../utils/v1.0/fx"; // 这里换成fx.js相对于该文件的相对路径
import { gotoPage, pageInit } from "../utils/v1.0/newGotoPage";

Page({
  build() {
    pageInit({
      onStop() {
        const text = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 2,
          y: 72,
          w: 150,
          h: 100,
          align_h: hmUI.align.CENTER_H,
          text_size: 37,
          color: 0xffffff,
          text: '小程序',
          show_level: hmUI.show_level.ONLY_NORMAL
        })
    
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 5,
          y: 130,
          w: 182,
          h: 80,
          radius: 20,//圆角
          color: 0xFFFFFF,//颜色，十六进制
          text_size: 24,
          normal_color: 0x2E7DF6,//一般按钮色
          press_color: 0x87CEFA,//按压按钮色
          text: '文件管理',//文字
          click_func: () => {//回调，触发事件
            gotoPage({
              url: "page/HomePage/index",
              param: ""
            });
          }
        });
        //--------------------------------------------------------
        hmUI.createWidget(hmUI.widget.STROKE_RECT, {
          x: 5,
          y: 220,
          w: 182,
          h: 80,
          radius: 25,//圆角
          line_width: 5,
          color: 0x2E7DF6//颜色，十六进制
        });
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 8,
          y: 245,
          w: 182,
          h: 80,
          color: 0xffffff,
          text_size: 24,
          align_h: hmUI.align.CENTER_H,
          text_style: hmUI.text_style.NONE,
          text: '小程序列表'
        });
    
        //---------------------------------------
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 4,
          y: 313,
          w: 183,
          h: 130,
          radius: 20,//圆角
          color: 0x202124//颜色，十六进制
        })
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 20,
          y: 330,
          src: "App_list.png"
        });
    
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: -65,
          y: 379,
          w: 288,
          h: 46,
          color: 0xFFFFFF,
          text_size: 24,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: '小程序排列'
        })
          .addEventListener(hmUI.event.CLICK_UP, function (c) {
            hmApp.startApp({
              url: "Settings_applistSortScreen",
              native: true,
            });
          });
        //------------------------------------------------------
    
    
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 4,
          y: 450,
          w: 183,
          h: 130,
          radius: 20,//圆角
          color: 0x202124//颜色，十六进制
        });
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 20,
          y: 468,
          src: "see.png"
        });
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: -65,
          y: 520,
          w: 288,
          h: 46,
          color: 0xFFFFFF,
          text_size: 24,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: '隐藏项管理'
        });
        /* .addEventListener(hmUI.event.CLICK_UP, function (c) {
          hmApp.startApp({
            url: "Settings_dndModelScreen",
            native: true,
          });
        }); */
    
        //-------------------------------------
    
    
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 4,
          y: 589,
          w: 183,
          h: 130,
          radius: 20,//圆角
          color: 0x202124//颜色，十六进制
        });
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 20,
          y: 605,
          src: "same.png"
        });
    
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: -65,
          y: 650,
          w: 288,
          h: 46,
          color: 0xFFFFFF,
          text_size: 24,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: '伪装项管理'
        });
        /* .addEventListener(hmUI.event.CLICK_UP, function (c) {
          hmApp.startApp({
            url: "PhoneMuteScreen",
            native: true,
          });
        }); */
        //---------------------------------------
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 4,
          y: 729,
          w: 183,
          h: 130,
          radius: 20,//圆角
          color: 0x202124//颜色，十六进制
        }).addEventListener(hmUI.event.CLICK_UP, function (c) {                          
            hmApp.gotoPage({
            url: "page/index.page2",
            param: "..."
            })
        });
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 20,
          y: 745,
          src: "lock.png"
        });
    
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: -85,
          y: 790,
          w: 288,
          h: 46,
          color: 0xFFFFFF,
          text_size: 24,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: '锁管理'
        });
        
        //---------------------------------------------------------------
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 4,
          y: 870,
          w: 183,
          h: 150,
          radius: 20,//圆角
          color: 0x2E7DF6//颜色，十六进制
        });
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 20,
          y: 890,
          src: "app_side.png"
        });
    
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: -50,
          y: 895,
          w: 288,
          h: 130,
          color: 0xFFFFFF,
          text_size: 24,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: '\n小米手环 7\n联网伴生教程'
        })
         .addEventListener(hmUI.event.CLICK_UP, function (c) {
            gotoPage({
              url: "page/HomePage/index2",
              param: ""
            });

          }); 
    
    
    
    
        //-------------------------------------------
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 6,
          y: 1040,
          w: 182,
          h: 80,
          color: 0xffffff,
          text_size: 28,
          align_h: hmUI.align.CENTER_H,
          text_style: hmUI.text_style.NONE,
          text: '关于'
        })
          .addEventListener(hmUI.event.CLICK_UP, function (c) {
            gotoPage({
              url: "page/HomePage/index3",
              param: ''
            });
          });


      },
    });

  }
})
