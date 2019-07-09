import { DataStore, Dialog, GResLoader, Logger } from "../../lcore/LCoreExports";

export interface RoomInterface {
    switchBg(agree: number): void;
    onDissolveClicked(): void;

    onExitButtonClicked(): void;
}
/**
 * 设置界面
 */
export class RoomSettingView extends cc.Component {

    private view: fgui.GComponent;
    private eventTarget: cc.EventTarget;
    private room: RoomInterface;
    private musicSlider: fgui.GSlider;
    private soundSlider: fgui.GSlider;

    public showView(room: RoomInterface, loader: GResLoader, isOwner: boolean, position: cc.Vec2): void {
        this.room = room;
        if (this.view === undefined || this.view === null) {
            // this.room = room;
            loader.fguiAddPackage("lobby/fui_room_other_view/room_other_view");
            this.view = fgui.UIPackage.createObject("room_other_view", "setting").asCom;
            this.initView(isOwner);
        }
        fgui.GRoot.inst.showPopup(this.view);

        this.view.setPosition(position.x, position.y - this.view.height);

    }

    protected onLoad(): void {
        this.eventTarget = new cc.EventTarget();
    }

    protected onDestroy(): void {
        //this.saveData();
        this.eventTarget.emit("destroy");
        this.view.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(isOwner: boolean): void {

        // const bg = this.view.getChild("bg");
        // bg.onClick(this.onCloseClick, this);

        const btnExit = this.view.getChild("btnExit");
        btnExit.onClick(this.onDisbandBtnClick, this);

        // const shutdownBtn = this.view.getChild("shutdownBtn");
        // shutdownBtn.onClick(this.onCloseClick, this);

        // const exitBtn = this.view.getChild("exitBtn");
        // exitBtn.onClick(this.onExitBtnClick, this);

        // this.view.getController("isOwner").selectedIndex = isOwner ? 0 : 1;

        // const disbandBtn = this.view.getChild("disbandBtn");
        // disbandBtn.onClick(this.onDisbandBtnClick, this);

        // const blueColorBtn = this.view.getChild("blueColorBtn");
        // blueColorBtn.onClick(this.onBlueColorBtnClick, this);

        // const classColorBtn = this.view.getChild("classColorBtn");
        // classColorBtn.onClick(this.onClassColorBtnClick, this);

        // const arrowBtn = this.view.getChild("arrowBtn");
        // arrowBtn.onClick(this.onArrowBtnClick, this);

        // let soundVolume = DataStore.getString("soundVolume");
        // let musicVolume = DataStore.getString("musicVolume");

        // this.soundSlider = this.view.getChild("soundSlider").asSlider;
        // if (soundVolume === "") {
        //     soundVolume = "50";
        // }
        // this.soundSlider.value = +soundVolume;
        // this.soundSlider.on(fgui.Event.STATUS_CHANGED, this.onSoundSliderChanged, this);

        // this.musicSlider = this.view.getChild("musicSlider").asSlider;
        // if (musicVolume === "") {
        //     musicVolume = "50";
        // }
        // this.musicSlider.value = +musicVolume;
        // this.musicSlider.on(fgui.Event.STATUS_CHANGED, this.onMusicSliderChanged, this);

        // //监听view 移出舞台。。。 保存音量
        // this.view.on(fgui.Event.UNDISPLAY, this.saveData, this);
    }
    private saveData(): void {
        DataStore.setItem("soundVolume", this.soundSlider.value.toString());
        DataStore.setItem("musicVolume", this.musicSlider.value.toString());
    }
    private onMusicSliderChanged(slider: fgui.GSlider): void {
        // Logger.debug("onMusicSliderChanged slider = ", slider.value
        cc.audioEngine.setMusicVolume(slider.value / 100);
    }

    private onSoundSliderChanged(slider: fgui.GSlider): void {
        // Logger.debug("onSoundSliderChanged slider = ", slider.value);
        cc.audioEngine.setEffectsVolume(slider.value / 100);
    }

    private onDisbandBtnClick(): void {
        //
        Dialog.showDialog("是否解散房间？", () => {

            this.sendDisbandMsg();
            // tslint:disable-next-line:align
        }, () => {
            //
        });
    }

    private sendDisbandMsg(): void {
        //
        this.room.onDissolveClicked();
    }

}
