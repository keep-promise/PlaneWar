// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {

    @property
    speed: number = 300;
    
    isDead: boolean = false;

    start () {

    }

    update(dt) {
        if (this.isDead === false) {
            this.node.y -= this.speed * dt;
        }
        if (this.node.y < -850) {
            this.node.destroy();
        }
    }


    die() {
        cc.loader.loadRes('airplane2', cc.SpriteFrame, (err, res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res;
        });
        setTimeout(() => {
            this.node.destroy();
        }, 300);
    }
}
