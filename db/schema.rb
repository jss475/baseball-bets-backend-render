# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_04_225659) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bbusers", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.float "money", default: 0.0
    t.float "winnings", default: 0.0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bets", force: :cascade do |t|
    t.integer "player_id"
    t.boolean "win"
    t.float "price"
    t.integer "odds"
    t.string "description"
    t.float "current_bets"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "bbuser_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "team_name"
    t.string "image"
    t.float "current_bets"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "stats", default: [], array: true
  end

  create_table "user_bets", force: :cascade do |t|
    t.integer "bbuser_id"
    t.integer "bet_id"
    t.float "money_bet"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
