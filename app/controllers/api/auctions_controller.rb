  module API 
  class AuctionsController < ApplicationController
        def index
            auctions = ['Auction 1', 'Auction 2']

            render json: { auctions: auctions }
        end

        def create 
            render json: { params: params }
        end
    end
end