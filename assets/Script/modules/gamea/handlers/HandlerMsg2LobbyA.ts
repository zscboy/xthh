import { DataStore } from "../../lobby/lcore/LCoreExports";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器返回大厅通知
 */
export namespace HandlerMsg2LobbyA {
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        // TODO:
        //g_dataModule: SaveDataByKey("RoomInfo", room.roomInfo);

        const roomInfo = room.roomInfo;
        const roomInfoData = {
            roomID: roomInfo.room_id,
            roomNumber: roomInfo.tag
            // config: roomInfo.config,
            // gameServerID: roomInfo.gameServerID
        };

        const roomInfoDataStr = JSON.stringify(roomInfoData);

        DataStore.setItem("RoomInfoData", roomInfoDataStr);
        room.quit();
    };
}
