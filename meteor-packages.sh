#!/bin/sh
# it seems that meteorite isn't very effective installing packages locally
echo "installing meteorite packages:"
echo "bootstrap..."
mrt add bootstrap
echo "iron router..."
mrt add iron-router
echo "spin..."
mrt add spin
echo "accounts ui bootstrap dropdown..."
mrt add accounts-ui-bootstrap-dropdown
echo "accounts password..."
mrt add accounts-password