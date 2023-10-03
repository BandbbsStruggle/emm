import { jzxcxlb } from "../../utils/v1.0/BandManger";
    Page({
        onInit(param) {
                const app_path = '/storage/js_apps';
                const [js_appsList, o] = hmFS.readdir(app_path);
                var tjzf = '';
                hmUI.setLayerScrolling(false);
                hmApp.setScreenKeep(true);
                hmApp.unregisterGestureEvent();
                hmSetting.setBrightScreen(600);
                    var lookAppsList = jzxcxlb();
                    if (lookAppsList !== 'cxjr'){
                        hmUI.createWidget(hmUI.widget.FILL_RECT, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 60,
                            radius: 0,
                            color: 0x000000
                        });
                        hmUI.createWidget(hmUI.widget.TEXT, {
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
                            radius: 20,
                            color: 0xffffff,
                            text_size: 27,
                            normal_color: '#2E7DF6',
                            press_color: '#2E7DF6',
                            text: '刷新项',
                            click_func: () => {
                                hmApp.reloadPage({
                                    url: 'page/applist',
                                    param: '1'
                                });
                            } 
                            }); 
                  hmUI.createWidget(hmUI.widget.STROKE_RECT, {   
                    x: 5,
                    y: 220,
                    w: 182,
                    h: 80,
                    radius: 25,
                    line_width: 5,
                    color:'#2E7DF6'
                    })            
                        hmUI.createWidget(hmUI.widget.TEXT, {
                          x: 8,
                          y: 245,
                          w: 182,
                          h: 80,
                          color: 0xE0EAFF,
                          text_size: 24,
                          align_h: hmUI.align.CENTER_H,                  
                          text_style: hmUI.text_style.NONE,
                          text: '扩展功能'
                        })
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 62,
                            w: 95,
                            h: 36,
                            radius: 0,
                            normal_color: 0x000000,
                            press_color: 262626,
                            text: '刷新',
                            click_func: () => {
                                hmApp.reloadPage({
                                    url: 'page/applist',
                                    param: '1'
                                });
                            }
                        });
                        
                            var item_config = [{
                                type_id: 1,
                                item_bg_color: 0x262626,
                                item_bg_radius: 12,
                                text_view: [{
                                    x: 0,
                                    y: 0,
                                    w: 140,
                                    h: 70,
                                    key: "text",
                                    text_size: 21,
                                    align_h: hmUI.align.CENTER_H,
                                    align_v: hmUI.align.CENTER_V,
                                    text_style: hmUI.text_style.NONE,
                                    color: 0xffffff
                                }],
                                text_view_count: 1,
                                item_height: 70
                            }]
                            var ui_SCROLL_LIST_x = -49
                            var ui_SCROLL_LIST_w = 192
                        hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
                            x: ui_SCROLL_LIST_x,
                            y: 103,
                            h: 76,
                            w: ui_SCROLL_LIST_w,
                            item_space: 10,
                            item_config: item_config,
                            item_config_count: 1,
                            data_array: lookAppsList,
                            data_count: lookAppsList.length,
                            data_type_config: [{
                                start: 0,
                                type_id: 1
                            }],
                            data_type_config_count: 1,
                            item_click_func: function (item, index) {
                                hmApp.gotoPage({
                                    url: 'page/del',
                                    param: JSON.stringify({
                                        appDelPath: lookAppsList[index].path.toString()
                                    })
                                });
                            }
                        });
                    }
        }
    });