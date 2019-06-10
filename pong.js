//
//  GameScene.swift
//  Pong
//
//  Created by EYNY on 5/28/19.
//  Copyright © 2019 Daniel Eyny. All rights reserved.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {

    var ball = SKSpriteNode()
    var enemy = SKSpriteNode()
    var main = SKSpriteNode()

    var score = [Int]()

    override func didMove(to view: SKView) {

        ball = self.childNode(withName: "ball") as! SKSpriteNode
        enemy = self.childNode(withName: "enemy") as! SKSpriteNode
        main = self.childNode(withName: "main") as! SKSpriteNode

        ball.physicsBody?.applyImpulse(CGVector(dx: 300, dy: 300))

        let border = SKPhysicsBody(edgeLoopFrom: self.frame)

        border.friction = 0
        border.restitution = 1

        self.physicsBody = border
    }

    func startGame() {
        score = [0,0]
    }
    func addScore(playerWhoWon: SKSpriteNode){
        if playerWhoWon == main {
            score[0] += 1
            ball.physicsBody?.applyImpulse(CGVector(dx: 300, dy: 300))
        }
        else if playerWhoWon == enemy {
           score[1] += 1
           ball.physicsBody?.applyImpulse(CGVector(dx: -300, dy: -300))
        }
        print(score)
    }
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {

        for touch in touches {
            let location = touch.location(in: self)

        main.run(SKAction.moveTo(x: location.x, duration: 0.9))

        }


    }
    override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
        for touch in touches {
            let location = touch.location(in: self)

            main.run(SKAction.moveTo(x: location.x, duration: 0.2))

        }
    }

    override func update(_ currentTime: TimeInterval) {
        // Called before each frame is rendered
        enemy.run(SKAction.moveTo(x: ball.position.x, duration: 0.1))

        if ball.position.y <= main.position.y - 70 {
            addScore(playerWhoWon: enemy)
        }
        else if ball.position.y >= enemy.position.y + 70 {
            addScore(playerWhoWon: main)
        }
    }
}