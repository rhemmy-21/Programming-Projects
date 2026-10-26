// BOXING GAME - FIXED MENU MUSIC + BATTLE MUSIC + READY FIGHT + KEPT COMMENTS + AUTO CONTINUE AFTER MOVE + HITBOXES AND MOVEMENT
#include "raylib.h"
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <stdio.h>

int main(void) {
    // Initialize window
    InitWindow(800, 600, "BOXING GAME");
    InitAudioDevice();
    SetTargetFPS(60);

    // Load textures
    Texture2D background = LoadTexture("background_ring.png");
    Texture2D titleScreen = LoadTexture("title_screen.png");

    Image computer1 = LoadImage("startposition.png");
    ImageResizeNN(&computer1, 200, 200);
    Texture2D cStartposition = LoadTextureFromImage(computer1);

    Image player1 = ImageCopy(computer1);
    ImageResizeNN(&player1, 200, 200);
    Texture2D pStartposition = LoadTextureFromImage(player1);

    Image computer1j = LoadImage("Jab.png");
    ImageResizeNN(&computer1j, 200, 200);
    Texture2D cJab = LoadTextureFromImage(computer1j);

    Image player1j = ImageCopy(computer1j);
    ImageResizeNN(&player1j, 200, 200);
    Texture2D pJab = LoadTextureFromImage(player1j);

    Image computer1hk = LoadImage("HookCross.png");
    ImageResizeNN(&computer1hk, 200, 200);
    Texture2D cHookCross = LoadTextureFromImage(computer1hk);

    Image player1hk = ImageCopy(computer1hk);
    ImageResizeNN(&player1hk, 200, 200);
    Texture2D pHookCross = LoadTextureFromImage(player1hk);

    Image computer1uc = LoadImage("uppercut.png");
    ImageResizeNN(&computer1uc, 200, 200);
    Texture2D cUppercut = LoadTextureFromImage(computer1uc);

    Image player1uc = ImageCopy(computer1uc);
    ImageResizeNN(&player1uc, 200, 200);
    Texture2D pUppercut = LoadTextureFromImage(player1uc);

    Texture2D cstoreMove;
    Texture2D pstoreMove;

    // Load sounds and music
    Sound punchSound = LoadSound("punch.wav");
    Sound hitSound = LoadSound("hit.wav");
    Sound winSound = LoadSound("win.wav");
    Sound gameoverSound = LoadSound("gameover.wav");
    Sound readyFightSound = LoadSound("ready_fight.wav"); // NEW

    //  Menu music for title, entering name, difficulty
    Music menuMusic = LoadMusicStream("background_music.ogg");
    PlayMusicStream(menuMusic);
    SetMusicVolume(menuMusic, 0.35f);

    // Battle music only during fight
    Music battleMusic = LoadMusicStream("battle_music.ogg");
    SetMusicVolume(battleMusic, 0.35f);

    // Player info
    char playerName[32] = "";
    char computerName[32] = "Computer";

    srand(time(NULL));

    int gameRunning = 1;
    int restartGame = 1;
    int fullRestart = 1;
    int difficulty = 0;

    // Game variables
    const int maxHP = 50;
    int Php = maxHP, Chp = maxHP;
    int roundFinished = 0;
    char roundMessage[256] = "";  // Increased size for longer messages
    int playerFistOffset = 0, computerFistOffset = 0;
    int playerFeetOffset = 0, computerFeetOffset = 0;
    int messageTimer = 0;  // NEW: Timer to show round message before auto-continuing

    int playerMove = -1;
    int computerMove = -1;
    int gameDifficulty = 0;

    // Movement variables for hitboxes and movement
    float initialPlayerX = 250.0f;
    float initialComputerX = 350.0f;
    float playerX = initialPlayerX;
    float computerX = initialComputerX;
    float targetPlayerX = playerX;
    float targetComputerX = computerX;
    int animating = 0;
    int animTimer = 0;

    // Move names for display
    const char* moveNames[3] = {"Jab", "Uppercut", "Cross/Hook"};

    while (gameRunning && !WindowShouldClose()) {
        if (restartGame) {
            if (fullRestart) {
                playerName[0] = '\0';
                difficulty = 0;
            }

            int nameEntered = 0;
            restartGame = 0;

            // --- TITLE SCREEN ---
            if (fullRestart) {
                int titleDone = 0;
                int blinkCounter = 0;

                while (!WindowShouldClose() && !titleDone) {
                    UpdateMusicStream(menuMusic);

                    if (IsKeyPressed(KEY_ENTER)) titleDone = 1;
                    blinkCounter++;

                    BeginDrawing();
                    ClearBackground(RAYWHITE);
                    DrawTexturePro(titleScreen, (Rectangle){0,0,titleScreen.width,titleScreen.height},
                                   (Rectangle){0,0,800,600}, (Vector2){0,0}, 0.0f, WHITE);

                    if ((blinkCounter / 30) % 2 == 0) {
                        DrawText("Press ENTER to start",260,370,20,BLACK);
                        DrawText("Press ENTER to start",259,369,20,WHITE);
                    }
                    EndDrawing();
                }
                if (WindowShouldClose()) { gameRunning = 0; continue; }

                // --- INSTRUCTIONS SCREEN ---
                int instructionsDone = 0;
                while (!WindowShouldClose() && !instructionsDone) {
                    UpdateMusicStream(menuMusic);

                    if (IsKeyPressed(KEY_ENTER)) instructionsDone = 1;

                    BeginDrawing();
                    ClearBackground(RAYWHITE);
                    DrawTexturePro(background,(Rectangle){0,0,background.width,background.height},
                                   (Rectangle){0,0,800,600},(Vector2){0,0},0,WHITE);

                    DrawText("PLAYER MANUAL", 300, 50, 30, WHITE);
                    DrawText("Welcome to Boxing Game!", 50, 100, 20, WHITE);
                    DrawText("This is a turn-based boxing match using rock-paper-scissors mechanics.", 50, 130, 18, WHITE);
                    DrawText("Moves:", 50, 160, 20, WHITE);
                    DrawText("- 1: Jab (beats Uppercut)", 70, 185, 18, WHITE);
                    DrawText("- 2: Uppercut (beats Cross/Hook)", 70, 210, 18, WHITE);
                    DrawText("- 3: Cross/Hook (beats Jab)", 70, 235, 18, WHITE);
                    DrawText("Press 1, 2, or 3 to select and execute your move.", 50, 260, 18, WHITE);
                    DrawText("Combat Rules:", 50, 290, 20, WHITE);
                    DrawText("- Same move: Both lose 5 HP", 70, 315, 18, WHITE);
                    DrawText("- Counter: Loser takes 5 HP damage", 70, 340, 18, WHITE);
                    DrawText("Difficulty affects AI behavior (random advantages).", 50, 365, 18, WHITE);
                    DrawText("First to 0 HP loses. Press ENTER to continue", 50, 395, 18, YELLOW);

                    EndDrawing();
                }
                if (WindowShouldClose()) { gameRunning = 0; continue; }

                // --- NAME ENTRY ---
                while (!WindowShouldClose() && !nameEntered) {
                    UpdateMusicStream(menuMusic);

                    int key = GetCharPressed();
                    while (key > 0) {
                        if ((key >= 32) && (key <= 125) && (strlen(playerName) < 18)) {
                            int len = strlen(playerName);
                            playerName[len] = (char)key;
                            playerName[len + 1] = '\0';
                        }
                        key = GetCharPressed();
                    }
                    if (IsKeyPressed(KEY_BACKSPACE) && strlen(playerName) > 0)
                        playerName[strlen(playerName)-1] = '\0';

                    if (IsKeyPressed(KEY_ENTER) && strlen(playerName) > 0) nameEntered = 1;

                    BeginDrawing();
                    ClearBackground(RAYWHITE);
                    DrawTexturePro(background,(Rectangle){0,0,background.width,background.height},
                                   (Rectangle){0,0,800,600},(Vector2){0,0},0,WHITE);
                    DrawText("Enter your name:",200,250,30,WHITE);
                    DrawRectangle(200,300,400,50,LIGHTGRAY);

                    //  Name text stays WHITE so it's visible
                    DrawText(playerName,210,310,30,WHITE);

                    EndDrawing();
                }
                if (WindowShouldClose()) { gameRunning = 0; continue; }

                // --- DIFFICULTY SELECT ---
                while (!WindowShouldClose() && !gameDifficulty) {
                    UpdateMusicStream(menuMusic);

                    if (IsKeyPressed(KEY_ONE)) { difficulty = 1; gameDifficulty = 1; }
                    else if (IsKeyPressed(KEY_TWO)) { difficulty = 2; gameDifficulty = 1; }
                    else if (IsKeyPressed(KEY_THREE)) { difficulty = 3; gameDifficulty = 1; }

                    BeginDrawing();
                    ClearBackground(RAYWHITE);
                    DrawTexturePro(background,(Rectangle){0,0,background.width,background.height},
                                   (Rectangle){0,0,800,600},(Vector2){0,0},0,WHITE);

                    DrawText("SELECT DIFFICULTY",200,200,30,WHITE);

                    //  Vertical text
                    DrawText("1 - EASY", 350, 260, 22, WHITE);
                    DrawText("2 - NORMAL", 350, 300, 22, WHITE);
                    DrawText("3 - HARD", 350, 340, 22, WHITE);

                    EndDrawing();
                }
                if (WindowShouldClose()) { gameRunning = 0; continue; }
            }

            // Reset fight stats
            Php = maxHP; Chp = maxHP;
            roundFinished = 0;
            roundMessage[0] = '\0';
            playerFistOffset = computerFistOffset = 0;
            messageTimer = 0;
            playerX = initialPlayerX;
            computerX = initialComputerX;
            targetPlayerX = playerX;
            targetComputerX = computerX;
            animating = 0;
            animTimer = 0;

            // --- READY FIGHT SEQUENCE ---
            PauseMusicStream(menuMusic);        //  pause menu music (don’t stop yet)
            PlaySound(readyFightSound);

            int timer = 0;
            while (timer < 180 && !WindowShouldClose()) {
                UpdateMusicStream(menuMusic);

                BeginDrawing();
                ClearBackground(BLACK);
                DrawTexturePro(background,(Rectangle){0,0,background.width,background.height},
                               (Rectangle){0,0,800,600},(Vector2){0,0},0,WHITE);

                DrawText("READY?",330,250,40,WHITE);
                if (timer > 120) DrawText("FIGHT!",350,300,40,RED);

                EndDrawing();
                timer++;
            }

            //  START BATTLE MUSIC AFTER READY-FIGHT
            StopMusicStream(menuMusic);
            PlayMusicStream(battleMusic);
        }

        // --- COMBAT LOOP ---
        while (!WindowShouldClose() && Php > 0 && Chp > 0) {
            UpdateMusicStream(battleMusic); //  keep battle music looping

            // Update animation if animating
            if (animating && animTimer > 0) {
                float t = 1.0f - ((float)animTimer / 60.0f);
                playerX = initialPlayerX + t * (targetPlayerX - initialPlayerX);
                computerX = initialComputerX + t * (targetComputerX - initialComputerX);
                animTimer--;
                if (animTimer <= 0) {
                    animating = 0;
                }
            }

            BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawTexturePro(background,(Rectangle){0,0,background.width,background.height},
                           (Rectangle){0,0,800,600},(Vector2){0,0},0,WHITE);

            // Draw Fighters
            Rectangle sourceRec = { 0, 0, (float)pStartposition.width, (float)pStartposition.height };
            sourceRec.width = -sourceRec.width; // Flip horizontally

            Vector2 flippedPosition = { playerX + playerFistOffset, 350 + playerFeetOffset};
            DrawTextureRec(pStartposition, sourceRec, flippedPosition, WHITE);

            DrawTexture(cStartposition, computerX + computerFistOffset, 350 + computerFeetOffset, WHITE);

            // HP bars
            DrawText(playerName,300,290,20,WHITE);
            DrawRectangle(300,320,Php*2,20,GREEN);
            DrawRectangleLines(300,320,maxHP*2,20,BLACK);
            DrawText(computerName,450,290,20,WHITE);
            DrawRectangle(450,320,Chp*2,20,GREEN);
            DrawRectangleLines(450,320,maxHP*2,20,BLACK);


            // Controls
            DrawText("Press 1 = Jab",50,50,20,WHITE);
            DrawText("Press 2 = Uppercut",50,80,20,WHITE);
            DrawText("Press 3 = Cross/Hook",50,110,20,WHITE);

            if (!roundFinished) {
                // Direct move selection and execution with 1,2,3
                if (IsKeyPressed(KEY_ONE)) {
                    playerMove = 0;  // Jab
                } else if (IsKeyPressed(KEY_TWO)) {
                    playerMove = 1;  // Uppercut
                } else if (IsKeyPressed(KEY_THREE)) {
                    playerMove = 2;  // Cross/Hook
                }

                if (playerMove != -1) {
                    // Execute move immediately after selection
                    PlaySound(punchSound);
                    computerMove = rand() % 3;

                    // Set movement targets based on who is attacking
                    if (playerMove == computerMove) {
                        // Both attack: move closer to each other
                        targetPlayerX = initialPlayerX + 50;
                        targetComputerX = initialComputerX - 50;
                    } else if ((playerMove + 1) % 3 == computerMove) {
                        // Computer counters: computer attacks, player defends
                        targetPlayerX = initialPlayerX - 50;
                        targetComputerX = initialComputerX + 50;
                    } else {
                        // Player counters: player attacks, computer defends
                        targetPlayerX = initialPlayerX + 50;
                        targetComputerX = initialComputerX - 50;
                    }
                    animating = 1;
                    animTimer = 60;  // 1 second animation

                    // Difficulty adjustments: affect computer's move choice
                    if (difficulty == 1) {  // Easy: 10% chance computer chooses a move that loses to player
                        if (rand() % 10 == 0) {
                            computerMove = (playerMove + 2) % 3;  // Loses to playerMove
                        }
                    } else if (difficulty == 3) {  // Hard: 10% chance computer chooses a move that beats player
                        if (rand() % 10 == 0) {
                            computerMove = (playerMove + 1) % 3;  // Beats playerMove
                        }
                    }

                    // Determine result and build message


                    switch(playerMove)
                    {

                    case 0:

                    {
                        playerFistOffset += 50;

                        pstoreMove = pStartposition;
                        pStartposition = pJab;
                        break;
                    }
                    case 1:
                    {
                        playerFistOffset += 50;
                        playerFeetOffset += 50;

                        pstoreMove = pStartposition;
                        pStartposition = pUppercut;
                        break;
                    }
                    case 2:
                    {
                        playerFistOffset -=5;
                        playerFeetOffset +=40;

                        pstoreMove = pStartposition;
                        pStartposition = pHookCross;
                        break;
                    }

                    }

                    switch(computerMove)
                    {

                    case 0:
                    {
                        computerFistOffset -= 50;

                        cstoreMove = cStartposition;
                        cStartposition = cJab;
                        break;

                    }
                    case 1:
                    {
                        computerFistOffset -= 50;
                        computerFeetOffset += 50;

                        cstoreMove = cStartposition;
                        cStartposition = cUppercut;
                        break;
                    }
                    case 2:
                    {
                        computerFistOffset += 5;
                        computerFeetOffset += 40;

                        cstoreMove = cStartposition;
                        cStartposition = cHookCross;
                        break;
                    }

                    }

                    if (playerMove == computerMove) {
                        Php -= 5; Chp -= 5;
                        PlaySound(hitSound);
                        snprintf(roundMessage, sizeof(roundMessage), "You used %s. Computer used %s. Both used \nthe same move! -5 HP each.", moveNames[playerMove], moveNames[computerMove]);
                    } else if ((playerMove + 1) % 3 == computerMove) {
                        Php -= 5;
                        PlaySound(hitSound);
                        snprintf(roundMessage, sizeof(roundMessage), "You used %s. Computer used %s. Countered!\nYou lose 5 HP.", moveNames[playerMove], moveNames[computerMove]);
                    } else {
                        Chp -= 5;
                        PlaySound(hitSound);
                        snprintf(roundMessage, sizeof(roundMessage), "You used %s. Computer used %s. You countered!\nComputer loses 5 HP.", moveNames[playerMove], moveNames[computerMove]);
                    }
                    roundFinished = 1;
                    messageTimer = 120;  // Show message for 2 seconds (60 FPS * 2)
                }
            } else {
                DrawText(roundMessage,50,150,22,RED);
                messageTimer--;
                if (messageTimer <= 0) {
                    roundFinished = 0;
                    playerFistOffset = 0;
                    playerFeetOffset = 0;
                    computerFistOffset = 0;
                    computerFeetOffset = 0;
                    playerMove = -1;  // Reset for next round
                    pStartposition = pstoreMove;
                    cStartposition = cstoreMove;
                    // Reset positions
                    playerX = initialPlayerX;
                    computerX = initialComputerX;
                    targetPlayerX = playerX;
                    targetComputerX = computerX;
                    animating = 0;
                    animTimer = 0;
                }
            }

            EndDrawing();
        }

        // --- END OF FIGHT ---
        StopMusicStream(battleMusic);

        BeginDrawing();
        ClearBackground(RAYWHITE);
        DrawTexturePro(background, (Rectangle){0,0,background.width,background.height},
                       (Rectangle){0,0,800,600}, (Vector2){0,0}, 0, WHITE);

        // Draw Fighters in final positions
        Rectangle sourceRec = { 0, 0, (float)pStartposition.width, (float)pStartposition.height };
        sourceRec.width = -sourceRec.width; // Flip horizontally
        Vector2 flippedPosition = { playerX + playerFistOffset, 350 + playerFeetOffset };
        DrawTextureRec(pStartposition, sourceRec, flippedPosition, WHITE);
        DrawTexture(cStartposition, computerX + computerFistOffset, 350 + computerFeetOffset, WHITE);

        // HP bars (moved to top)
        DrawText(playerName, 50, 20, 20, WHITE);
        DrawRectangle(50, 40, Php * 2, 20, GREEN);
        DrawRectangleLines(50, 40, maxHP * 2, 20, BLACK);
        DrawText(computerName, 450, 20, 20, WHITE);
        DrawRectangle(450, 40, Chp * 2, 20, GREEN);
        DrawRectangleLines(450, 40, maxHP * 2, 20, BLACK);

        if (Php <= 0 && Chp <= 0) {
            DrawText("It's a tie!", 350, 200, 30, YELLOW);
        } else if (Php <= 0) {
            DrawText("You lose!", 350, 200, 30, RED);
            PlaySound(gameoverSound);
        } else if (Chp <= 0) {
            DrawText("You win!", 350, 200, 30, GREEN);
            PlaySound(winSound);
        }

        DrawText("Press R to restart or Q to quit", 250, 250, 20, WHITE);
        EndDrawing();

        // Wait for restart or quit
        int endDone = 0;
        while (!WindowShouldClose() && !endDone) {
            if (IsKeyPressed(KEY_R)) {
                restartGame = 1;
                fullRestart = 0;  // Don't go back to title/name/difficulty
                endDone = 1;
            } else if (IsKeyPressed(KEY_Q)) {
                gameRunning = 0;
                endDone = 1;
            }

            BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawTexturePro(background, (Rectangle){0,0,background.width,background.height},
                           (Rectangle){0,0,800,600}, (Vector2){0,0}, 0, WHITE);

            // Draw Fighters in final positions
            DrawTextureRec(pStartposition, sourceRec, flippedPosition, WHITE);
            DrawTexture(cStartposition, computerX + computerFistOffset, 350 + computerFeetOffset, WHITE);

            // HP bars
            DrawText(playerName, 300, 290, 20, WHITE);
            DrawRectangle(300, 320, Php * 2, 20, GREEN);
            DrawRectangleLines(300, 320, maxHP * 2, 20, BLACK);
            DrawText(computerName, 450, 290, 20, WHITE);
            DrawRectangle(450, 320, Chp * 2, 20, GREEN);
            DrawRectangleLines(450, 320, maxHP * 2, 20, BLACK);

            if (Php <= 0 && Chp <= 0) {
                DrawText("It's a tie!", 350, 200, 30, YELLOW);
            } else if (Php <= 0) {
                DrawText("You lose!", 350, 200, 30, RED);
            } else if (Chp <= 0) {
                DrawText("You win!", 350, 200, 30, GREEN);
            }

            DrawText("Press R to restart or Q to quit", 250, 250, 20, WHITE);
            EndDrawing();
        }
    }

    // Unload all resources
    UnloadTexture(background);
    UnloadTexture(titleScreen);
    UnloadTexture(cStartposition);
    UnloadTexture(pStartposition);
    UnloadTexture(cJab);
    UnloadTexture(pJab);
    UnloadTexture(cHookCross);
    UnloadTexture(pHookCross);
    UnloadTexture(cUppercut);
    UnloadTexture(pUppercut);

    UnloadSound(punchSound);
    UnloadSound(hitSound);
    UnloadSound(winSound);
    UnloadSound(gameoverSound);
    UnloadSound(readyFightSound);

    UnloadMusicStream(menuMusic);
    UnloadMusicStream(battleMusic);

    CloseAudioDevice();
    CloseWindow();

    return 0;
}
