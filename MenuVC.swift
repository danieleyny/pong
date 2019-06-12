//
//  MenuVC.swift
//  Pong
//
//  Created by EYNY on 6/11/19.
//  Copyright © 2019 Daniel Eyny. All rights reserved.
//

import Foundation
import UIKit

enum gameType {
    case easy
    case medium
    case impossible
    case player2
}
class MenuVC: UIViewController {

    @IBAction func Player2( sender: Any) {
        moveToGame(game: .player2)
    }
    @IBAction func Easy( sender: Any) {
        moveToGame(game: .easy)
    }
    @IBAction func Medium( sender: Any) {
        moveToGame(game: .medium)
    }
    @IBAction func Impossible( sender: Any) {
        moveToGame(game: .impossible)
    }


    func moveToGame(game : gameType) {
        let gameVC = self.storyboard?.instantiateViewController(withIdentifier: "gameVC") as! GameViewController

        currentGameType = game

        self.navigationController?.pushViewController(gameVC, animated: true)
    }
}
