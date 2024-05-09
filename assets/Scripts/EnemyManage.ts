// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManage extends cc.Component {

    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;

    start () {
        this.schedule(() => {
            const enemy = cc.instantiate(this.enemyPre);
            enemy.setParent(cc.director.getScene());
            enemy.y = this.node.y;
            enemy.x = Math.random() * 400 + 20;
        }, 2)
    }

    // update (dt) {}
}
