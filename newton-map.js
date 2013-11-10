{"version":3,"file":"newton.js","sources":["src/body.js","src/distanceconstraint.js","src/edge.js","src/frame.js","src/layer.js","src/lineargravity.js","src/material.js","src/particle.js","src/pixirenderer.js","src/radialgravity.js","src/rectangle.js","src/renderer.js","src/simulator.js","src/vector.js"],"names":["Newton","Body","material","this","particles","edges","constraints","simulator","undefined","simParticles","simEdges","simConstraints","prototype","addTo","Error","push","apply","addParticle","particle","Particle","Array","slice","call","arguments","addEdge","edge","Edge","addConstraint","constraint","DistanceConstraint","each","method","args","i","length","callback","exports","p1","p2","distance","getDistance","pos1","position","pos2","diff","clone","sub","getLength","resolve","delta","invmass1","getMass","invmass2","factor","correction1","scale","correction2","correct","getCoords","x1","x","y1","y","x2","y2","Material","simple","compute","_rect","Rectangle","COLLISION_TOLERANCE","getAbc","a","b","c","anchor","vector","angle","getAngle","normal","turnLeft","unit","bounds","fromVectors","expand","getRepelled","Vector","add","getProjection","dot","getDot","getAngleDelta","findIntersection","bounds1","bounds2","set","overlaps","l1","l2","det","contains","scratch","getReflection","velocity","restitution","dir","friction","velN","multScalar","velT","reflectedVel","timeoutFrame","currTime","Date","getTime","timeToCall","Math","max","lastTime","id","setTimeout","cancelTimeoutFrame","clearTimeout","window","vendors","isOpera","opera","navigator","userAgent","indexOf","Object","toString","HTMLElement","chrome","requestAnimationFrame","cancelAnimationFrame","frame","bind","cancelFrame","Layer","bodies","forces","watchedLayers","wrapper","container","cachedParticles","cachedForces","cachedEdges","respondTo","layers","addForce","force","wrapIn","rect","containBy","addBody","body","collect","ilen","j","jlen","watched","integrate","time","applyTo","constrain","wrap","contain","collide","LinearGravity","strength","falloff","rotate","setAngle","setStrength","accelerateVector","options","weight","maxVelocity","maxVelocitySquared","setMaxVelocity","v","mod","size","lastPosition","lastValidPosition","acceleration","randomDrag","random","randomness","pinned","colliding","copy","drag","min","getSquaredLength","zero","placeAt","moveBy","dx","dy","pin","Infinity","setVelocity","subXY","right","left","bottom","top","newX","width","newY","height","applyForce","mass","getSquaredSpeed","attractSquare","m","minDist","r","f","ratio","nearest","intersect","oldDistance","newDistance","partOfEdge","wall","bouncePoint","reflectedVelocity","rgbToHex","g","PixiRenderer","el","stage","PIXI","Stage","setInteractive","renderer","autoDetectRenderer","view","style","display","appendChild","infoText","Text","fill","font","addChild","graphics","Graphics","sim","clear","drawParticles","drawEdges","drawForces","setText","fps","render","lineStyle","RadialGravity","beginFill","drawCircle","endFill","pos","last","brightness","moveTo","lineTo","setLocation","v1","v2","amount","Renderer","ctx","getContext","drawConstraints","drawCounts","drawFPS","save","fillStyle","fillRect","restore","lineWidth","strokeStyle","beginPath","arc","PI","lineCap","join","stroke","closePath","counts","fillText","text","noop","Simulator","preSimulator","integrationFps","constraintIterations","step","_step","running","frames","countTime","countInterval","accumulator","simulationStep","start","now","stop","simulate","entity","newLayer","toFixed","mult","multVector","reverse","div","scalar","turnRight","sin","cos","getCross","sqrt","atan2"],"mappings":"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"}