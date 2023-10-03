import { finishShow,stringToUTF8Array, xrjcbin, xcxjm, qxxcxjm, utf8ArrayToString,writeFileSync,readFileSync,jzxcxmz,jzxcxlb,statSync,statSync1} from "../../utils/v1.0/BandManger";
try {
    Page({
        onInit(param) {
            /*------------------------------
            | 初始化                        |
            ------------------------------*/
            hmUI.setLayerScrolling(false);
            hmApp.setScreenKeep(true);
            /*------------------------------
            | 设置语言                      |
            ------------------------------*/
            const language = hmSetting.getLanguage();
            if (language == 0 || language == 1) {
                var language_xcxsc = '应用锁';
                var language_yc = '已上锁';
                //var language_czyc = '操作异常';
                //var language_ycyywfdk = '隐藏的应用暂无法打开';
                //var language_dk = '打开';
                var language_qd = '确定';
                var language_jm = '上锁';
                var language_yjm = '解锁'
                //var language_sccq = '已删除,重启生效';
                var language_cq = '重启';
                //var language_xcxyc = '隐藏';
                //var language_xcxxs = '显示';
                var language_name = '名称：';
                var language_version = '版本：';
                var language_vender = '作者：';
                //var language_wz = '未知';
                //var language_yc_t = '隐藏成功,重启生效';
                //var language_yc_f = '取消隐藏成功,重启生效';
				var language_xcxbzct3 = '小程序不支持3';
				var language_finishnow = '上锁成功\n立即生效';
				var language_nopassword = '请先设置密码';
				var language_wjds = '文件丢失';
				var language_finishrt = '上锁成功\n重启生效';
				//var language_qxjmcg = '取消加密成功';
				var language_jssbo = '解锁失败1';
				var language_jscgnow = '解锁成功\n立即生效';
				//var language_jssbt = '解锁失败2';
				var language_xcxbzco = '小程序不支持1';
				var language_xcxbzct2 = '小程序不支持2';
				var language_xcxbzcth = '小程序不支持3';
            } else {
                var language_xcxsc = 'Apps Lock';
                var language_yc = 'Hide';
                //var language_czyc = 'Abnormal operation';
                //var language_ycyywfdk = 'Hidden apps cannot be opened temporarily';
                //var language_dk = 'Open';
                var language_jm = 'Encryption';
                var language_yjm = 'Unlock'
                var language_qd = 'OK';
                //var language_jsc = 'Delete only';
                //var language_sccq = 'Deleted, restart effective';
                var language_cq = 'Reboot';
                //var language_xcxyc = 'Hide';
                //var language_xcxxs = 'Unhide';
                var language_name = 'Name：';
                var language_version = 'Version：';
                var language_vender = 'Venders：';
                //var language_wz = 'Unknown';
                //var language_yc_t = 'Hidden successfully, restart takes effect';
                //var language_yc_f = 'Unhide succeeded, restart takes effect';
				var language_xcxbzct3 = 'The applet does not support (3)';
				var language_finishnow = 'Locked successfully\neffective immediately';
				var language_nopassword = 'Please set your password first';
				var language_wjds = 'Lost documents';
				var language_finishrt = 'Locked successfully\neboot effective';
				//var language_qxjmcg = 'Cancellation of encryption successful';
				var language_jssbo = 'Failed to unlock (1)';
				var language_jscgnow = 'Unlocked successfully\neffective immediately';
				//var language_jssbt = 'Unlock Failure （2）';
				var language_xcxbzco = 'Not supported by the applet1';
				var language_xcxbzct2 = 'Not supported by the applet2';
				var language_xcxbzcth = 'Not supported by the applet3';


            }
            /*------------------------------
            | 其他配置                      |
            ------------------------------*/
            hmApp.unregisterGestureEvent()
            const paramsObj = JSON.parse(param);
            const { appPath } = paramsObj;
            var app_path2 = '../../../../../js_apps/' + appPath + '/app.json';
            var fs_stat = statSync(app_path2);
            if (!fs_stat) {
                app_path2 = '../../../../../js_apps/' + appPath + '/app.json.bak';
                fs_stat = statSync(app_path2);
                if (!fs_stat) finishShow(1, language_xcxbzct2);
            }
            var appInfo = jzxcxmz(fs_stat, app_path2, appPath);
            var AppUnlock_appid = readFileSync('AppUnlock_appid.txt')
            if (AppUnlock_appid == 'notfile'){
                AppUnlock_appid = {}
            }else{
                AppUnlock_appid = JSON.parse(AppUnlock_appid)
            }
            const button_pos_x = 21;
            const button_size_w = 150;
            const button_size_h = 70;
            //设置主题，经典为0，暗黑为1，zt为主题变量，为str
            var zt = hmFS.SysProGetChars('Band_Manager_Pro_zt')
            if (zt == undefined){
                hmFS.SysProSetChars('Band_Manager_Pro_zt', '0');
                zt = '0'
            }
            //设置左右按钮主题，经典为0，暗黑为1，zt为主题变量，为str
            if(zt == '1'){
                var zyaj_normal_color = 0x000000
                var zyaj_press_color = 0x262626
            }else{
                var zyaj_normal_color = 0x262626
                var zyaj_press_color = 0x101010
            }
            //const button_pos_x2_l = 21;
            //const button_pos_x2_r = 101;
            //const button_size_w2 = 70;
            /*------------------------------
            | 显示界面                      |
            ------------------------------*/
            var title_background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                x: 0,
                y: 0,
                w: 192,
                h: 60,
                radius: 0,
                color: zyaj_normal_color
            });
            var title_text = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 40,
                y: 0,
                w: 112,
                h: 70,
                color: 0xffffff,
                text_size: 20,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                text_style: hmUI.text_style.NONE,
                text: language_xcxsc
            });
            const ui_icon = hmUI.createWidget(hmUI.widget.IMG, {
                x: 46,
                y: 70,
                src: '../../../../../js_apps/' + appPath + '/assets/' + appInfo[3]
            });
            const ui_text = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 175,
                w: 192,
                h: 260,
                color: 16777215,
                text_size: 17,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.TOP,
                text_style: hmUI.text_style.ELLIPSIS,
                text: language_name + appInfo[0] + '\nAPPID：' + appInfo[1] + '\n' + language_version + appInfo[4] + '\n' + language_vender + appInfo[2]
            });
            const ui_an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: button_pos_x,
                y: 380,//460
                w: button_size_w,
                h: button_size_h,
                radius: 12,
                normal_color: 0xff0000,
                press_color: 0x9a0000,
                text_size: 22,
                text: language_jm,
                click_func: () => xcxjm()
            });
            const ui_an1_s = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: button_pos_x,
                y: 380,//460
                w: button_size_w,
                h: button_size_h,
                radius: 12,
                normal_color: 0xff0000,
                press_color: 0x9a0000,
                text_size: 22,
                text: language_yjm,
                click_func: () => qxxcxjm()
            });
            var fs_stat1 = statSync('../../../../../js_apps/' + appPath + '/pages/BandManagerPro_index_Lock.js');
            if (fs_stat1 == null) {
                ui_an1_s.setProperty(hmUI.prop.VISIBLE, false);
            }else{
                if (AppUnlock_appid[appInfo[1].toString()]['type'] == "True"){
                    ui_an1.setProperty(hmUI.prop.VISIBLE, false);
                }else{
                    ui_an1_s.setProperty(hmUI.prop.VISIBLE, false);
                }
            }
            /*------------------------------
            | 其他函数                      |
            ------------------------------*/
            
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
