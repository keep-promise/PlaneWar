// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EnemyControl from "./EnemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {

    @property
    speed: number = 800;

    start () {

    }

    update(dt) {
        this.node.y += this.speed * dt;
        if (this.node.y > 820) {
            this.node.destroy();
        }
    }

    onCollisionEnter(other) {
        // 子弹碰到敌人，敌人死亡，子弹销毁
        if (other.tag == 1) {
            // 敌人死亡
            other.getComponent(EnemyControl).die();
            // 子弹销毁
            this.node.destroy();
        }
    }
}
