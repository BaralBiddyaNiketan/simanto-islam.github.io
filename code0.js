gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDFloor2Objects1= [];
gdjs.Untitled_32sceneCode.GDFloor2Objects2= [];
gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDganObjects1= [];
gdjs.Untitled_32sceneCode.GDganObjects2= [];
gdjs.Untitled_32sceneCode.GDBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDEnamyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnamyObjects2= [];
gdjs.Untitled_32sceneCode.GDsenterObjects1= [];
gdjs.Untitled_32sceneCode.GDsenterObjects2= [];
gdjs.Untitled_32sceneCode.GDspornpointObjects1= [];
gdjs.Untitled_32sceneCode.GDspornpointObjects2= [];
gdjs.Untitled_32sceneCode.GDWallobjectObjects1= [];
gdjs.Untitled_32sceneCode.GDWallobjectObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnamyObjects1Objects = Hashtable.newFrom({"Enamy": gdjs.Untitled_32sceneCode.GDEnamyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDspornpointObjects1Objects = Hashtable.newFrom({"spornpoint": gdjs.Untitled_32sceneCode.GDspornpointObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnamyObjects1Objects = Hashtable.newFrom({"Enamy": gdjs.Untitled_32sceneCode.GDEnamyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallobjectObjects1Objects = Hashtable.newFrom({"Wallobject": gdjs.Untitled_32sceneCode.GDWallobjectObjects1});

gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {
  if (gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left")) {
    gdjs.copyArray(runtimeScene.getObjects("gan"), gdjs.Untitled_32sceneCode.GDganObjects1);
    for (var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length; i < len; ++i) {
      var ganObj = gdjs.Untitled_32sceneCode.GDganObjects1[i];
      if (ganObj.getBehavior("FireBullet")) {
        ganObj.getBehavior("FireBullet").Fire(
          ganObj.getX(),
          ganObj.getY(),
          gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects,
          ganObj.getAngle(),
          600,
          null
        );
      }
    }
  }
};
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{

/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("Idel");
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnamyObjects1Objects = Hashtable.newFrom({"Enamy": gdjs.Untitled_32sceneCode.GDEnamyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsenterObjects1Objects = Hashtable.newFrom({"senter": gdjs.Untitled_32sceneCode.GDsenterObjects1});
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, 500, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gan"), gdjs.Untitled_32sceneCode.GDganObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDganObjects1[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("gan"), gdjs.Untitled_32sceneCode.GDganObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDganObjects1[i].getBehavior("Flippable").flipY(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnamyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDEnamyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Animation").setAnimationName("Hart");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Animation").getAnimationName() == "Hart" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnamyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Animation").setAnimationName("_Walking");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enamysporn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnamyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("spornpoint"), gdjs.Untitled_32sceneCode.GDspornpointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Enamysporn") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDspornpointObjects1Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDspornpointObjects1 */
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnamyObjects1Objects, (( gdjs.Untitled_32sceneCode.GDspornpointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspornpointObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDspornpointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspornpointObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enamysporn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Animation").getAnimationName() == "Hart") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnamyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("senter"), gdjs.Untitled_32sceneCode.GDsenterObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].addForceTowardObject((gdjs.Untitled_32sceneCode.GDsenterObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDsenterObjects1[0] : null), 10, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Wallobject"), gdjs.Untitled_32sceneCode.GDWallobjectObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallobjectObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gan"), gdjs.Untitled_32sceneCode.GDganObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDganObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointX("Ganpoint")),(( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointY("ganpoint")));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDganObjects1[i].rotateTowardAngle(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), runtimeScene);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);
gdjs.copyArray(runtimeScene.getObjects("senter"), gdjs.Untitled_32sceneCode.GDsenterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnamyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsenterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);
gdjs.copyArray(runtimeScene.getObjects("gan"), gdjs.Untitled_32sceneCode.GDganObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setZOrder((gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].setZOrder((gdjs.Untitled_32sceneCode.GDBulletObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].setZOrder((gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDganObjects1[i].setZOrder((gdjs.Untitled_32sceneCode.GDganObjects1[i].getPointY("")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gan"), gdjs.Untitled_32sceneCode.GDganObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDganObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDganObjects1[i].setZOrder((( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);
gdjs.copyArray(runtimeScene.getObjects("senter"), gdjs.Untitled_32sceneCode.GDsenterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getX() < (( gdjs.Untitled_32sceneCode.GDsenterObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDsenterObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnamyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enamy"), gdjs.Untitled_32sceneCode.GDEnamyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getX() >= gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnamyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnamyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnamyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnamyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnamyObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



// While event not generated to prevent an infinite loop.

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
{
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
elseEventsChainSatisfied = true;
}
}

}


{


const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("child");
const iterableReference2 = gdjs.VariablesContainer.badVariable;
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{
}
}
}

}

}

};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDFloor2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloor2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDganObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDganObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnamyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspornpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspornpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
gdjs.Untitled_32sceneCode.GDFloor2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloor2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDganObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDganObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnamyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnamyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspornpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspornpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
