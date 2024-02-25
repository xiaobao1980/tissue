"""添加订阅模块

Revision ID: 435901486157
Revises: 5df63268ceb5
Create Date: 2024-02-25 16:19:59.550826

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '435901486157'
down_revision: Union[str, None] = '5df63268ceb5'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('subscribe',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('num', sa.String(), nullable=False),
    sa.Column('premiered', sa.Date(), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('cover', sa.String(), nullable=True),
    sa.Column('actors', sa.String(), nullable=True),
    sa.Column('last_updated', sa.DateTime(), nullable=True),
    sa.Column('is_hd', sa.Boolean(), nullable=False),
    sa.Column('is_zh', sa.Boolean(), nullable=False),
    sa.Column('is_uncensored', sa.Boolean(), nullable=False),
    sa.Column('create_by', sa.Integer(), nullable=True),
    sa.Column('create_time', sa.DateTime(timezone=True), nullable=True),
    sa.Column('update_by', sa.Integer(), nullable=True),
    sa.Column('update_time', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('subscribe')
    # ### end Alembic commands ###
