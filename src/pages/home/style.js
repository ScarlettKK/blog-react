import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`

export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`

export const TopicWrapper = styled.div`
	overflow: hidden
	padding: 20px 0 10px 0;
	margin-left:-18px;
	border-bottom: 1px solid #dcdcdc;
`
// 这里先用 margin-left:-18px; 将整体外层div往左拉18px
// 然后再在下面的子元素中应用margin-left: 18px;，这样最左边的元素就不用单独调整位置

export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	padding-right: 10px;
	font-size: 14px;
	margin-left: 18px;
	margin-bottom: 18px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		margin-right: 10px;
		display: block;
		float: left;
		// vertical-align: middle
		width: 32px;
		height: 32px;
	}
`
// 这里为何要给 图片整成 display: block; float: left;？
// 因为图片默认是inline元素，那么这个TopicItem中的文字其实也是inline元素
// inline元素在没有设置vertical-align属性的时候，默认是相对于基线对齐的，而图片会基于顶线对齐（默认情况，是图片置顶对齐，文字置底对齐）
// 所以这时候图片高，文字低，不能水平居中对齐（字体line-height无效）
// 其实这时只给img设置vertical-align: middle，不改变其display属性，也能达到相同的效果

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow:hidden;
	.pic {
		width: 120px;
		height: 100px;
		display: block;
		float: right;
	}
`

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
	
`

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
	
`
// sytle.js中可以接收组件的props传过来的参数,从而达到根据传进来的url地址自由切换背景图片的效果
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`

export const WriterWrapper = styled.div`
	
`

export const WriterHeader = styled.div`
	font-size: 14px;
    color: #969696;
`

export const WriterList = styled.div`
	img{
		width: 48px;
		height: 48px;
		border: 1px solid #ddd;
		border-radius: 50%;
		vertical-align: middle;
	}
	margin-top: 15px;
	line-height: 20px;
`

export const WriterIntro = styled.div`
	.writerName {
		padding-top: 5px;
	    margin-right: 60px;
	    font-size: 14px;
	    display: block;
	}
	.writerAchievement {
		margin-top: 2px;
	    font-size: 12px;
	    color: #969696;
	    display: block;
	}
	display: inline-block;
	margin-left: 10px;
	height: 48px;
	vertical-align: middle;
`

export const Follow = styled.div`
	float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
`

export const CheckAllWriters = styled.div`
    padding: 7px 7px 7px 12px;
    width: 92%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
`
