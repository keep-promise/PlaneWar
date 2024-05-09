// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    bulletPre: cc.Prefab = null;

    start () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            this.node.setPosition(event.getLocation())
        });

        this.schedule(() => {
            // 创建子弹
            const bullet = cc.instantiate(this.bulletPre);
            // 设置父物体
            bullet.setParent(cc.director.getScene());

            // 设置子弹位置
            bullet.x = this.node.x;
            bullet.y = this.node.y + 60;
        }, 0.5);
        
        cc.director.getCollisionManager().enabled = true;
    }

    // update (dt) {}
}
